import React from "react";

const LoginButton = () => {
  const [isLoggedin, setIsLoggedin] = React.useState(false);
  let content;
  if (isLoggedin) {
    content = "Welcome back!";
  } else {
    content = "Please login to use our service.";
  }
  return (
    <>
      <button onClick={() => setIsLoggedin(!isLoggedin)}>
        {isLoggedin ? "log out" : "log in"}
      </button>
      <h3>{content}</h3>
    </>
  );
};

export default LoginButton;
