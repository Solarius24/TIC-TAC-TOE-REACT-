import React from "react";
import Square from "./Square";
import calculateWinner from "./Winner"

const Board = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true);
    const winner = calculateWinner(squares)
    let status
  
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = 'NEXT PLAYER: ' + (isX ? 'X' : 'O');
    }

    const handleRestart = () => {
        setIsX(true)
        setSquares(Array(9).fill(null))
      }
  
    const handleClick = (i) => {
        if (winner) {
            return}

      squares[i] = isX ? 'X' : 'O'
      setSquares(squares)
      setIsX(!isX)
    }
    return (
        <div>
            <header className="container">
                <h2 className="status"> {status}</h2>
                <button className="restart" onClick = {handleRestart}> GAME RESTART</button>
            </header>
            <div className="board">
                <Square value={squares[0]} onClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onClick={()=>handleClick(2)}/>
                <Square value={squares[3]} onClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onClick={()=>handleClick(5)}/>
                <Square value={squares[6]} onClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onClick={()=>handleClick(8)}/>
            </div>
        </div>
    )
}
export default Board