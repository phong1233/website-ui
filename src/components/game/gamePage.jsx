import React from 'react';
import styles from '../../style/gameStyle.module.css';
import Title from '../title';
import GameBox from './gameBox';
import Snake from './snake/snake';
import Draw from './draw/draw';

function GamePage() {
  return (
    <div className={styles.container}>
      <Title title={'Games'}/>
      <GameBox title={'Snake'} description={snakeDescription} wasd arrow game={<Snake/>}/>
      <GameBox title={'Draw'} description={'coming soon'} keyboard mouse game={<Draw />} />
    </div>
  );
}

const snakeDescription = 'Eat as many red cubes as you can. Your snake will grow as you eat. Beware going out of bound or eating yourself will result in death.';

export default GamePage;