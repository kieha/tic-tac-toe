import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  buttonStyle: {
    background: 'white',
    border: '2px solid black',
    fontSize: '30px',
    fontWeight: '800',
    height: '100px',
    width: '100px',
  },
};

const Square = ({ onClick, value }) => (
  <button onClick={onClick} style={styles.buttonStyle}>{value}</button>
);

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Square.defaultProps = {
  value: null,
};

export default Square;
