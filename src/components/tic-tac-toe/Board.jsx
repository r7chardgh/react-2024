import React from "react";
import Row from "./Row";
import Square from "./Square";
import calculateWinner from "../../helpers/calulateWinner";

const Board = ({ xIsNext, squares, handlePlay }) => {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    handlePlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "winner: " + winner;
  } else {
    status = "next player: " + (xIsNext ? "X" : "O");
  }

  const loopRow = Array(3)
    .fill(null)
    .map((v, i, a) => {
      return (
        <Row key={i}>
          {Array(3)
            .fill(null)
            .map((v, j) => (
              <Square
                key={a.length * i + j}
                value={squares[a.length * i + j]}
                handleClick={() => handleClick(a.length * i + j)}
              />
            ))}
        </Row>
      );
    });

  return (
    <div className="container">
      <div className="status">{status}</div>
      {loopRow}
    </div>
  );
};

export default Board;
