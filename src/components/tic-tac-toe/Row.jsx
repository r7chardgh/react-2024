import React from "react";

const Row = ({ children, ...props }) => {
  return (
    <div className="board-row" props>
      {children}
    </div>
  );
};

export default Row;
