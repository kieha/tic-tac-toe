import PropTypes from 'prop-types';
import React from 'react';
import Square from './Square';

const styles = {
  boardStyle: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    height: '300px',
    margin: '100px auto 0',
    width: '300px',
  },
};

const Board = ({ onClick, values }) => (
  <div style={styles.boardStyle}>
    {values.map((value, i) => (
      <Square key={`Square-${i}`} onClick={() => onClick(i)} value={value} />
      ))}
  </div>
);

Board.propTypes = {
  onClick: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
}

export default Board;
