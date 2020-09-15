import Board from './Board';
import React, { useState } from 'react';
import { calculateWinner } from '../utils/helpers';

const style= {
  buttonContainerStyle: {
    margin: 'auto',
    width: '300px',
  },
};

const Game = () => {
  const [values, setValues] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(values);

  const handleClick = (i) => {
    const valuesCopy = [...values];

    if (winner || valuesCopy[i]) return;

    valuesCopy[i] = xIsNext ? 'X' : 'O';
    setValues(valuesCopy);
    setXIsNext(!xIsNext);
  }

  return (
    <>
    <Board onClick={handleClick} values={values} />
    <div style={style.buttonContainerStyle}>
      <p>{winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`}</p>
      <button onClick={() => setValues(Array(9).fill(null))}>Start Game</button>
    </div>
    </>
  )
};

export default Game;
