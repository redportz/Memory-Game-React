import "./GameBoard.css";
import React from 'react';
import Data from '../Data.jsx'
import Card from '../Card/Card.jsx'

function GameBoard() {
    const [cardsArray,setCardsArray] = React.useState([]);
    const [moves, setMoves] = React.useState(0);
    const [firstCard, setFirstCard] = React.useState(null);
    const [secondCard, setSecondCard] = React.useState(null);
    const [stopFlip, setStopFlip] = React.useState(false);
    const [won, setWon] = React.useState(0);

    // starts new game
    function NewGame() {
        setTimeout(() => {
            const randomOrderArray = Data.sort(() => 0.5 - Math.random());
            setCardsArray(randomOrderArray);
            setMoves(0);
            firstMove(0);
            setFirstCard(null);
            setSecondCard(null);
            setWon(0);
        }, 1200);
    }

    // helps in storing the first and second card values
    function handleSelectedCards(item) {
        if (firstCard !== null && firstCard.id !== item.id) {
            setSecondCard(item);
        }else{
            setCardsArray(item);
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
                setWon((preVal) => preVal +1);
                removeSelected();
            } else {
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
        NewGame();
    }, []);

    return (
        <div className="game-container">
            <div className="header">
                <h1>Memory Game</h1>
            </div>
            <div className="board">
                {
                    cardsArray.map((item) => (
                        <Card
                        item = {item}
                        key = {item.id}
                        handleSelectedCards={handleSelectedCards}
                        toggled={
                            item ===firstCard || item === secondCard || item.matched === true
                        }
                        stopflip={stopFlip}
                        />
                    ))
                }
            </div>

            {won !== Data.length ? (
                <div className="comments">Moves : {moves}</div>
            ) : (
                <div className="comments">
                     You Won in {moves} moves 
                </div>
            )}
            <button className="button" onClick={NewGame}>
                New Game
            </button>
        </div>
    )

}

export default GameBoard