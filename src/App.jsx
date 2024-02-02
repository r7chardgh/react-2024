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
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const handleClick = (i) => {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  };
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
        <Row>
          <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
          <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
          <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
        </Row>
        <Row>
          <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
          <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
          <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
        </Row>
        <Row>
          <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
          <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
          <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
        </Row>
      </div>
    </>
  );
};

export default App;
