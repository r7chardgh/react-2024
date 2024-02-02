import React from "react";
import MyButton from "./components/MyButton";
import './styles/app.css'
import Avatar from "./components/Avatar";
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
const App = () => {
  return (
    <>
      <h2>My App</h2>
      <MyButton />
      <Avatar user={user}/>
    </>
  );
};

export default App;
