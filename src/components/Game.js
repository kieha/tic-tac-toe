import Board from './Board';
import React, { useState, useEffect, useCallback } from 'react';
import { calculateWinner, getRandomInt } from '../utils/helpers';

const styles = {
  buttonContainerStyle: {
    margin: 'auto',
    width: '300px',
  },
  headerStyle: {
    textAlign: 'center',
  },
  startScreenStyle: {
    margin: 'auto',
    width: '500px',
  },
};

const GAME_STATES = {
  notStarted: 'not_started',
  inProgress: 'in_progress',
  over: 'over',
};

const emptyGridArray = Array(9).fill(null);

const Game = () => {
  const [values, setValues] = useState(emptyGridArray);
  const [players, setPlayers] = useState({ human: null, computer: null });
  const [gameState, setGameState] = useState(GAME_STATES.notStarted);
  const [nextMove, setNextMove] = useState(null);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const winner = calculateWinner(values);
    if (winner !== null && gameState !== GAME_STATES.over) {
      setGameState(GAME_STATES.over);
      setWinner(winner);
    }
  }, [gameState, values]);

  const startNewGame = () => {
    setGameState(GAME_STATES.notStarted);
    setValues(emptyGridArray);
  }

  const choosePlayer = option => {
    setPlayers({ human: option, computer: option === 'X' ? 'O' : 'X' });
    setGameState(GAME_STATES.inProgress);
    setNextMove('X');
  }

  const move = useCallback((index, player) => {
    if (player && gameState === GAME_STATES.inProgress) {
      setValues(values => {
        const valuesCopy = [...values];
        valuesCopy[index] = player;
        return valuesCopy;
      });
    }
  }, [gameState]);

  const computerMove = useCallback(() => {
    let index = getRandomInt(0, 8);
    while (values[index]) {
      index = getRandomInt(0, 8);
    }
    move(index, players.computer);
    setNextMove(players.human);
  }, [move, values, players]);

  const humanMove = index => {
    if (!values[index] && nextMove === players.human) {
      move(index, players.human);
      setNextMove(players.computer);
    }
  }

  useEffect(() => {
    let timeout;
    if (nextMove !== null && nextMove === players.computer && gameState !== GAME_STATES.over) {
      timeout = setTimeout(() => {
        computerMove();
      }, 500);
    }
    return () => timeout && clearTimeout(timeout);
  }, [nextMove, computerMove, players.computer, gameState]);


  return gameState === GAME_STATES.notStarted ? (
    <div style={styles.startScreenStyle}>
      <h2>Choose Your Player</h2>
        <button onClick={() => choosePlayer('X')}>X</button>
        <p>or</p>
        <button onClick={() => choosePlayer('O')}>O</button>
    </div>
  ) : (
    <>
      <Board onClick={humanMove} values={values} />
      <div className="Game-buttonContainer" style={styles.buttonContainerStyle}>
        <p>{`Winner: ${winner}`}</p>
        <button onClick={startNewGame}>Start Game</button>
      </div>
    </>
  )
};

export default Game;
