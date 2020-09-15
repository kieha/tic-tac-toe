import PropTypes from 'prop-types';
import React from 'react';

const style = {
  background: 'white',
  border: '2px solid black',
  fontSize: '30px',
  fontWeight: '800',
}

const Square = ({ onClick, value }) => (
  <button onClick={onClick} style={style}>{value}</button>
)

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Square;
