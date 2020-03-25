import React from 'react';
import styles from './snake.module.css';
import { useState, useRef } from 'react';
import useInterval from '../../../helper/useInterval';

import Leaderboard from '../leaderboard';
import Grid from './grid';

function Snake() {
  const boxFocus = useRef(null);
  const [score, setScore] = useState(0);
  const [direction, setDirection] = useState('right');
  const [alive, setAlive] = useState(true);
  const [food, setFood] = useState([25, 9]);
  const [head, setHead] = useState([[5,9]]);
  const speed = 80;
  const width = 30;
  const height = 20;
  const [grid, setGrid] = useState(() => {
    let temp = [];
    for(let x = 0; x < width; x++){
      temp[x] = [];
      for(let y = 0; y < height; y++){
        //default food position
        if(y === 9 && x === 25) {
          temp[x][y] = 'food';
        }
        //default snake position
        else if(y === 9 && x === 5) {
          temp[x][y] = 'snake';
        }
        else {
          temp[x][y] = 'empty';
        }
      }
    }
    return temp;
  });

  const moveSnake = () => {
    let eated = false;
    let tempHead = head;
    let currentX = head[0][0];
    let currentY = head[0][1];

    if(direction === 'right') {
      currentX += 1;
    }
    else if(direction === 'left') {
      currentX -= 1;
    }
    else if(direction === 'down'){
      currentY += 1;
    }
    else if(direction === 'up'){
      currentY -= 1;
    }

    tempHead.forEach(coor => {if(coor[0]===currentX && coor[1]===currentY) {
      setAlive(false);
      return;
    }});
    if(currentX < 0 || currentY < 0 || currentX >= 30 || currentY >= 20) {
      setAlive(false);
      return;
    }
    if(currentX === food[0] && currentY === food[1]) {
      setScore(score + 1);
      eated = true;
      let emptyBox = []
      for(let x = 0; x < width; x++) {
        for(let y =0; y < height; y++) {
          if( grid[x][y] === 'empty' ) {
            emptyBox.push([x,y]);
          }
        }
      }
      const newFood = Math.floor(Math.random() * emptyBox.length);
      setFood(emptyBox[newFood]);
    }

    tempHead.unshift([currentX,currentY]);
    if(!eated) {
      tempHead.pop();
    }
    setHead(tempHead);

    //update grid
    let temp = [];
    for(let x = 0; x < width; x++) {
      temp[x] = [];
      for(let y = 0; y < height; y++) {
        temp[x][y] = 'empty';
      }
    }

    tempHead.forEach(coor => temp[coor[0]][coor[1]] = 'snake');
    temp[food[0]][food[1]] = 'food'
    setGrid(temp);
  }

  useInterval(moveSnake, speed);

  const checkKey = (e) => {
    let letter = e.key;
    if(letter === 'w') {
      if (head[0][1]-1 >= 0 && grid[head[0][0]][head[0][1]-1] !== 'snake') {
        setDirection('up');
      }
    }
    else if(letter === 'a') {
      if (head[0][0]-1 >= 0 && grid[head[0][0]-1][head[0][1]] !== 'snake')
        setDirection('left');
    }
    else if(letter === 's') {
      if (head[0][1]+1 < height && grid[head[0][0]][head[0][1]+1] !== 'snake')
        setDirection('down');
    }
    else if(letter === 'd') {
      if (head[0][0]+1 < width && grid[head[0][0]+1][head[0][1]] !== 'snake')
        setDirection('right');
    }
  }

  const focusBox = () => {
    boxFocus.current.focus();
  }

  const resetGame = () => {
    setScore(0);
    setDirection('right');
    setAlive(true);
    setFood([25, 9]);
    setHead([[5,9]]);
    setGrid(() => {
      let temp = [];
      for(let x = 0; x < width; x++){
        temp[x] = [];
        for(let y = 0; y < height; y++){
          //default food position
          if(y === 9 && x === 25) {
            temp[x][y] = 'food';
          }
          //default snake position
          else if(y === 9 && x === 5) {
            temp[x][y] = 'snake';
          }
          else {
            temp[x][y] = 'empty';
          }
        }
      }
      return temp;
    });
  }

  if(alive){
    return(
      <div className={styles.snakeBox} tabIndex='0' onKeyDown={checkKey} onMouseOver={focusBox} ref={boxFocus}>
        <Grid grid={grid} width={width} height={height}/>
        <div className={styles.scoreBox}>
          Score
          <div className={styles.score}>
            {score}
          </div>
          Direction
          <div className={styles.score}>
            {direction.toUpperCase()}
          </div>
          Speed
          <div className={styles.score}>
            {speed}
          </div>
        </div>
      </div>
    );
  }
  else {
    return(<Leaderboard score={score} game={'snake'} reload={resetGame} number={9}/>);
  }
}

export default Snake;