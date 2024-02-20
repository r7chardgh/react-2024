import React from "react";
import MyButton from "./components/MyButton";
import "./styles/app.css";
import Avatar from "./components/Avatar";
import LoginButton from "./components/LoginButton";
import ProductList from "./components/ProductList";
import Parent from "./components/Parent";
import Game from "./components/tic-tac-toe/Game";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
const App = () => {
  return (
    <>
      <h2>My App</h2>
      <MyButton />
      <Avatar user={user} />
      <LoginButton />
      <ProductList />
      <Parent />
      <Game />
    </>
  );
};

export default App;
