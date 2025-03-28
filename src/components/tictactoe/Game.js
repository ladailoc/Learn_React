import React, { useState } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) {
      return;
    }
    boardCopy[index] = isXNext ? "X" : "O";
    setBoard(boardCopy);
    setIsXNext(!isXNext);
  };
  const handleResetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };
  return (
    <div>
      <Board cells={board} onClick={handleClick}></Board>
      <div className="game-winner">
        {winner
          ? `Winner is: ${winner}`
          : `Next player: ${isXNext ? "X" : "O"}`}
      </div>
      <button className="game-reset" onClick={handleResetGame}>
        Reset game
      </button>
    </div>
  );
};

export default Game;
