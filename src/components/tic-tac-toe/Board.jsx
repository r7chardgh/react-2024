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

  return (
    <div className="container">
      <div className="status">{status}</div>
      <Row>
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </Row>
      <Row>
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </Row>
      <Row>
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </Row>
    </div>
  );
};

export default Board;
