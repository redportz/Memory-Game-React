import "./MultiplayerComments.css";

function Multiplayer_comments({playerOneScore, moves, playerTwoScore, playerTurn}) {
    return(

            <div className="multi-comments">
            <div className="comments">Player 1 Score: {playerOneScore} </div>
            <div className="comments">Moves : {moves} </div>
            <div className="comments">Player 2 Score: {playerTwoScore} </div>
            <div className={`player-indicator ${playerTurn === 1 ? 'player-one' : 'player-two'} comments current-player-display`}>Current Turn: Player {playerTurn}</div>
            </div> 
    )
}

export default Multiplayer_comments;``