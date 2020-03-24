import React from 'react';
import Square from './square';
import styles from './snake.module.css';

function Grid(props) {
  const height = [...Array(props.height).keys()];
  const width = [...Array(props.width).keys()];

  return (
    <div className={styles.gridBox}>
      {
        height.map((y) => (
          <div className={styles.gridRow} key={y}>{
            width.map((x) => {
              return(<Square key={[x,y]} content={props.grid[x][y]}/>);
            })
          }</div>
        ))
      }
    </div>
  );
}

export default Grid;