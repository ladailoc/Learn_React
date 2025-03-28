import React from "react";
import Cell from "./Cell";
import { calculateWinner } from "../../helpers";

const Board = (props) => {
  console.log("Board", props.cells);
  return (
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "cell-x" : item === "O" ? "cell-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
