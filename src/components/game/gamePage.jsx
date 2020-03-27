import React from 'react';
import styles from '../../style/gameStyle.module.css';
import Title from '../title';
import GameBox from './gameBox';
import Snake from './snake/snake';

function GamePage() {
  return (
    <div className={styles.container}>
      <Title title={'Games'}/>
      <GameBox title={'Snake'} description={snakeDescription} wasd arrow game={<Snake/>}/>
      <GameBox title={'2048'} description={'coming soon'}/>
    </div>
  );
}

const snakeDescription = 'Eat as many red cubes as you can. Your snake will grow as you eat. Beware going out of bound or eating yourself will result in death.';

export default GamePage;