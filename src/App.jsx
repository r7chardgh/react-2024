import React from "react";
import MyButton from "./components/MyButton";
import "./styles/app.css";
import Avatar from "./components/Avatar";
import LoginButton from "./components/LoginButton";
import ProductList from "./components/ProductList";
import Parent from "./components/Parent";
import Row from "./components/tic-tac-toe/Row";
import Square from "./components/tic-tac-toe/Square";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const App = () => {
  const [xIsNext, setXIsNext] = React.useState(true);
  //const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [history, setHistory] = React.useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = React.useState(0)
  const currentSquares = history[currentMove]; //when currentmove

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory); //add history
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext)  //takes turn
  }

  const jumpTo = (nextMove) => {
    setCurrentMove(nextMove)
    setXIsNext(nextMove % 2 === 0) //if nextMove is even or 0 , 'x' is next; otherwise, 'o' is next
  }
  const moves = history.map((squares, move) => {
    let desc;
    if (move > 0) {
      desc = "Go to move #" + move;
    } else {
      desc = "Go to game start";
    }
    return (<li key={move}>
      <button onClick={() => jumpTo(move)}>{desc}</button>
    </li>)
  })


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // possible winning situation
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        //check if 'o' or 'x' matches one of the winning situation
      }
    }
    return null;
    //no matches, return null = tie
  }
  const handleClick = (i) => {
    if (currentSquares[i] || calculateWinner(currentSquares)) {
      return;
      //end the game = not allow to click
      //if it is not empty, end the game
      //if someone won the game, end the game      
    }
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";

    }
    handlePlay(nextSquares)

    //without immutate the squares array
  };

  let status;
  let winner = calculateWinner(currentSquares);

  if (winner) {
    status = "Winner: " + winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O")
  }

  return (
    <>
      <h2>My App</h2>
      <MyButton />
      <Avatar user={user} />
      <LoginButton />
      <ProductList />
      <Parent />
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <div className="status">{status}</div>
        <Row>
          <Square value={currentSquares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={currentSquares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={currentSquares[2]} onSquareClick={() => handleClick(2)} />
        </Row>
        <Row>
          <Square value={currentSquares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={currentSquares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={currentSquares[5]} onSquareClick={() => handleClick(5)} />
        </Row>
        <Row>
          <Square value={currentSquares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={currentSquares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={currentSquares[8]} onSquareClick={() => handleClick(8)} />
        </Row>
        <div className="game-info">

          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
};

export default App;
