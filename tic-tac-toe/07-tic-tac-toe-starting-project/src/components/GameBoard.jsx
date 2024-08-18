import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
export default function GameBoard({ handleBoxSelected, turns }) {
    const gameBoard = [...initialGameBoard.map(ia => [...ia])];

    if (turns) {
        for (let turn of turns) {
            gameBoard[turn.row][turn.col] = turn.symbol;
        }
        console.log(gameBoard);
    }

    return (
        <ol id="game-board">
            {
                gameBoard.map((row, rowIndex) => (
                    <li key={rowIndex}>
                        <ol>
                            {row.map((col, colIndex) => (
                                <li key={colIndex}>
                                    <button onClick={() => handleBoxSelected(rowIndex, colIndex)}
                                        disabled={col !== null}>{col}</button>
                                </li>
                            ))}
                        </ol>
                    </li>
                ))
            }
        </ol>
    );
}