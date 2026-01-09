import "./GameBoard.css";
import React from 'react';
import Card from '../Card/Card.jsx'
import cardSets from "../Categories/index.js"
import { replace, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Multiplayer_comments from "./comments/MultiplayerComments.jsx";



function GameBoard({multiplayerMode}) {
    const { category, difficulty } = useParams();
    const navigate = useNavigate();
    const [cardsArray,setCardsArray] = React.useState([]);
    const [moves, setMoves] = React.useState(0);
    const [firstCard, setFirstCard] = React.useState(null);
    const [secondCard, setSecondCard] = React.useState(null);
    const [stopFlip, setStopFlip] = React.useState(false);
    const [won, setWon] = React.useState(0);
    const [playerTurn, setPlayerTurn] = React.useState(1);
    const [playerOneScore, setPlayerOneScore] = React.useState(0);
    const [playerTwoScore, setPlayerTwoScore] = React.useState(0);
    const setLength = 
        difficulty === "beginner" ? 4 :
        difficulty === "intermediate" ? 8 :
        12;

    const selectedSet = cardSets[category] ?? [];

    // starts new game
    function startGame() {
        console.log(difficulty);
        
        

        const baseSet = cardSets[category] ?? [];

        const part1 = baseSet.slice(0, setLength);
        const part2 = baseSet.slice(12, 12 + setLength);
        const deck = [...part1, ...part2];

        const shuffled = [...deck].sort(()  => 0.5 - Math.random());
            setCardsArray(shuffled);
            setMoves(0);
            setFirstCard(null);
            setSecondCard(null);
            setStopFlip(false)
            setWon(0);
            setPlayerOneScore(0);
            setPlayerTwoScore(0);
            setPlayerTurn(1);
    }

    // helps in storing the first and second card values
    function handleSelectedCards(item) {
        if (firstCard !== null && firstCard.id !== item.id) {
            setSecondCard(item);
        } else {
            setFirstCard(item);
        }
    }

    React.useEffect(() =>{
        // if two have been selected
        if (firstCard && secondCard){
            setStopFlip(true);
            // we check to see if they match
            if (firstCard.name === secondCard.name) {
                // if they match we stop the flipping ability
                setCardsArray((prevArray) =>{
                    return prevArray.map((unit) => {
                        if (unit.name === firstCard.name) {
                            return {...unit, matched: true};
                        }else{
                            return unit;
                        }
                    });
                });
                if (multiplayerMode) {
                    if (playerTurn === 1) {
                        setPlayerOneScore((prevValue) => prevValue + 1);
                    } else {
                        setPlayerTwoScore((prevValue) => prevValue + 1);
                    }
                }
                setWon((preVal) => preVal +1);
                removeSelected();
            } else {
                if (multiplayerMode) {
                    setPlayerTurn((prevTurn) => (prevTurn === 1 ? 2 : 1));
                }
                setTimeout(() => {
                    removeSelected();
                },1000);
            }
        }
    }, [firstCard, secondCard]);

    // after the selected img has been checked
    // we empty the firstCard and secondCard components
    function removeSelected() {
        setFirstCard(null);
        setSecondCard(null);
        setStopFlip(false);
        setMoves((prevValue) => prevValue + 1);
    }


    // Starts the game for the first time
    React.useEffect(() => {
        startGame();
    }, [category, difficulty]);

    return (
        <div className="game-container">
            <div className="header">
                <h1>Memory Game</h1>
            </div>
            <div className={`board difficulty-${difficulty}`}>
                {
                    cardsArray.map((item) => (
                        <Card
                        key = {item.id}
                        item = {item}
                        handleSelectedCards={handleSelectedCards}
                        toggled={
                            item.id ===firstCard?.id || item.id === secondCard?.id || item.matched === true
                        }
                        stopflip={stopFlip}
                        />
                    ))
                }
            </div>
            {multiplayerMode ? (
            // display for multiplayer mode on
                    won !== setLength  ? (
                    <Multiplayer_comments 
                    playerOneScore={playerOneScore} 
                    moves={moves} 
                    playerTwoScore={playerTwoScore} 
                    playerTurn={playerTurn} />   
                
                ):
                (<div className="multiplayer-win_screen">
                        <p className="win_text">
                            Player {playerOneScore > playerTwoScore ? '1' : playerTwoScore > playerOneScore ? '2' : 'No one, it\'s a Tie!'} Wins! <br />
                            Final Scores <br />
                            Player 1: <span>{playerOneScore}</span> <br />
                            Player 2: <span>{playerTwoScore}</span>
                            </p>
                        <button className="play_again_btn" onClick={startGame}>Play Again?</button>
                    </div>))
            :(won !== setLength  ? (
                    <div className="comments">Moves : {moves}</div>
                ) : (
                    <div className="win_screen">
                        <p className="win_text">You Won! <br />
                        Moves <br /><span>{moves}</span>
                            </p>
                        <button className="play_again_btn" onClick={startGame}>Play Again?</button>
                    </div>
            ))}
            <div className="buttons">
            <button className="to-menu-btn" onClick={() => navigate("/", {replace: true})}>Menu</button>
            <button className="newGame-btn" onClick={startGame}>New Game</button>
            </div>
        </div>
    )

}

export default GameBoard