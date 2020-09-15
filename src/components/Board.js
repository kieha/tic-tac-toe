import PropTypes from 'prop-types';
import React from 'react';
import Square from './Square';

const style = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  height: '300px',
  margin: 'auto',
  width: '300px',
}

const Board = ({ onClick, values }) => (
  <div style={style}>
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
