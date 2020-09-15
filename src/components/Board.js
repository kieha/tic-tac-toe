import React from 'react';
import Square from './Square';

const style = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  height: '300px',
  margin: 'auto',
  width: '300px',
}

const Board = () => (
  <div style={style}>
    <Square onClick={() => console.log('I WAS CLICKED 1')} value='1' />
    <Square onClick={() => console.log('I WAS CLICKED 2')} value='2' />
    <Square onClick={() => console.log('I WAS CLICKED 3')} value='3' />
    <Square onClick={() => console.log('I WAS CLICKED 4')} value='4' />
    <Square onClick={() => console.log('I WAS CLICKED 5')} value='5' />
    <Square onClick={() => console.log('I WAS CLICKED 6')} value='6' />
    <Square onClick={() => console.log('I WAS CLICKED 7')} value='7' />
    <Square onClick={() => console.log('I WAS CLICKED 8')} value='8' />
    <Square onClick={() => console.log('I WAS CLICKED 9')} value='9' />
  </div>
);

export default Board;
