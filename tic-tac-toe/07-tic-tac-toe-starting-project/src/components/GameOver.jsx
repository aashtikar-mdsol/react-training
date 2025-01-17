export default function GameOver({ winner, restartGame }) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {
                winner ?
                    <p>Winner is {winner}!!!</p> :
                    <p>Its a Draw!</p>
            }
            <button onClick={restartGame}>Rematch</button>
        </div>
    );

}