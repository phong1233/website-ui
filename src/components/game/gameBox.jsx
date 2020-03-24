import React from 'react';
import styles from '../../style/gameStyle.module.css';

import { useState } from 'react';
import NotPlaing from './notPlayingPage';
import Playing from './playingPage';

function GameBox(props) {
  const [play, setPlay] = useState(false);
  return (
    <div className={styles.box} onClick={()=>setPlay(true)} onMouseLeave={()=>setPlay(false)}>
      { play ?
        <Playing title={props.title} description={props.description}/>
        :
        <NotPlaing title={props.title}/>
      }
    </div>
  );
}

export default GameBox;