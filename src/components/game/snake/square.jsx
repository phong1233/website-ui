import React from 'react';
import styles from './snake.module.css';

function Square(props) {
  return(
    {
      'empty': <div className={styles.square}/>,
      'snake': <div className={styles.isSnake}/>,
      'food': <div className={styles.isFood}/>
    }[props.content]
  );
}

export default Square;