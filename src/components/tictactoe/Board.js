import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  console.log("Board", props.cells);
  console.log("Board props", props);
  return (
    <div className="game-board">
      {props.cells.map(
        (item, index) => (
          console.log("item", item, index),
          (
            <Cell
              key={index}
              value={item}
              onClick={() => props.onClick(index)}
              className={item === "X" ? "cell-x" : item === "O" ? "cell-o" : ""}
            ></Cell>
          )
        )
      )}
    </div>
  );
};

export default Board;
