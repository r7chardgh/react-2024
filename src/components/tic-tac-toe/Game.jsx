import React from "react";
import Board from "./Board";
const Game = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const currentSquares = history[currentMove];
  const nextIsX = currentMove%2===0;
  const handlePlay = (squares) => {
    const nextHistory = [...history.slice(0,currentMove+1),squares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1)
  };

  function jumpTo(move) {
    setCurrentMove(move);
  }

  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={nextIsX}
          squares={currentSquares}
          handlePlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
