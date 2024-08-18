import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import { useState } from 'react';
import Logs from './components/Logs.jsx';
import GameOver from './components/GameOver.jsx';

function checkWinner(turns, players) {
  function checkInLineCase(allTurns) {
    const groupedCol = allTurns.reduce((acc, turn) => {
      const key = turn.col;
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] = acc[key] + 1;
      return acc;
    }, {});
    const groupedRow = allTurns.reduce((acc, turn) => {
      const key = turn.row;
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] = acc[key] + 1;
      return acc;
    }, {});
    if (groupedCol[0] === 3 || groupedCol[1] === 3 || groupedCol[2] === 3) {
      return true;
    } else if (groupedRow[0] === 3 || groupedRow[1] === 3 || groupedRow[2] === 3) {
      return true;
    }
    return false;
  }

  function checkDiagonalCase(turns) {
    return (
      turns.some(turn => turn.row === 0 && turn.col === 0) &&
      turns.some(turn => turn.row === 1 && turn.col === 1) &&
      turns.some(turn => turn.row === 2 && turn.col === 2)
    ) ||
      (
        turns.some(turn => turn.row === 2 && turn.col === 0) &&
        turns.some(turn => turn.row === 1 && turn.col === 1) &&
        turns.some(turn => turn.row === 0 && turn.col === 2)
      )
  }

  let xTurns = turns.filter(turn => turn.symbol === 'X');
  let oTurns = turns.filter(turn => turn.symbol === '0');
  if (checkInLineCase(xTurns) || checkDiagonalCase(xTurns)) {
    return players['X'];
  }
  if (checkInLineCase(oTurns) || checkDiagonalCase(oTurns)) {
    return players['0'];
  }
  return null;
}

function deriveCurrentPlayer(turns) {
  if (turns.length > 0 && turns[0].symbol === 'X') {
    return '0';
  }
  return 'X';
}

function App() {
  const [turns, updateTurns] = useState([]);
  const [players, updatePlayers] = useState({
    'X': 'Player 1',
    '0': 'Player 2'
  });
  const currentSymbol = deriveCurrentPlayer(turns);
  const winner = checkWinner(turns, players);
  const isDraw = (winner === null && turns.length === 9)

  function restartGame() {
    updateTurns(currentTurns => []);
  }

  function updatePlayerName(symbol, name) {
    updatePlayers(currentPlayers => {
      let copy = { ...currentPlayers };
      copy[symbol] = name;
      return copy;
    })
  }

  function handleBoxSelected(rowSelected, colSelected) {
    updateTurns(currentTurns => {
      let updatedSymbol = deriveCurrentPlayer(turns);
      return [{ row: rowSelected, col: colSelected, symbol: updatedSymbol }, ...currentTurns]
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player name="Player 1" symbol="X" isActive={'X' === currentSymbol} updatePlayerName={updatePlayerName} />
          <Player name="Player 2" symbol="0" isActive={'0' === currentSymbol} updatePlayerName={updatePlayerName} />
        </ol>
        {(winner || isDraw) ? <GameOver winner={winner} restartGame={restartGame} /> : null}
        <GameBoard handleBoxSelected={handleBoxSelected} turns={turns} />
      </div>
      <Logs turns={turns} />
    </main>
  )
}

export default App
