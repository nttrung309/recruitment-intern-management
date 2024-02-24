import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import './game.css';

function App() {
  const [isX, setIsX] = useState<any>(true);
  const [gameState, setGameState] = useState<any[][]>(
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]);

  const updateMap = (row: number, col: number) => {
    const newGameState = {...gameState};
    newGameState[row][col] = (isX) ? 1 : 2;
    setGameState(newGameState);
    setIsX(!isX);
  }

  return (
    <div className="App">
      <div className="game-board">
        {gameState.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div  key={`${rowIndex}-${colIndex}`} className="cell"
                onClick={() => updateMap(rowIndex, colIndex)}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
