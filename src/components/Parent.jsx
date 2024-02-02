import React from "react";
import Child from "./Child";
const Parent = () => {
  const [goStudy, setGoStudy] = React.useState(0);
  function handleStudy() {
    setGoStudy(goStudy + 1);
  }
  return (
    <>
      <h1>Parent</h1>
      I have two childs:
      <Child goStudy={goStudy} handleStudy={handleStudy} />
      <Child goStudy={goStudy} handleStudy={handleStudy} />
    </>
  );
};

export default Parent;
