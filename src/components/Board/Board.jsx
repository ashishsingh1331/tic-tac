import { useState } from "react";
import Square from "../Square/Square";

const Board = () => {
  const [squares,setSquares] = useState(Array(9).fill(null));
  const [player,setPlayer] = useState(false);

  const resetGame = () => {
    setSquares((prevState) => {
      return Array(9).fill(null);
    })
  }

  const handleBoardOnclick = (i) => {

    setSquares((squares) => {
      const updatedSquares =  [
        ...squares
      ];

       if( updatedSquares[i] === null && player === false ) {
        updatedSquares[i] = 'X';
        setPlayer(true);
       }

       if( updatedSquares[i] === null && player === true ) {
        updatedSquares[i] = '0';
        setPlayer(false);
       }


       return updatedSquares;
    });
  }

  const renderSquare = (i) => {
    return <Square onClick={handleBoardOnclick} index={i} value={squares[i]}/>;
  }

  return  <div>
    <div>Status</div>
    <button onClick={resetGame}>reset</button>
    <div className="board-row">
      { renderSquare(0) }
      { renderSquare(1) }
      { renderSquare(2) }
    </div>
    <div className="board-row">
    { renderSquare(3) }
      { renderSquare(4) }
      { renderSquare(5) }
    </div>
    <div className="board-row">
    { renderSquare(6) }
      { renderSquare(7) }
      { renderSquare(8) }
    </div>
  </div>
}

export default Board;

