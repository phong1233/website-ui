import React from 'react';
import styles from './draw.module.css';

function InfoBar(props) {
  return (
    <div className={styles.info}>
      <div className={styles.infoUsername} style={{fontWeight:500}}>
        {props.username}
      </div>
      <img className={styles.infoImage} src='images/game/draw/friend.png' alt='group'/>
      <div className={styles.infoContent}>
        {props.playerNum}
      </div>
      <img className={styles.infoImage} src='images/game/draw/stopwatch.png' alt='timer'/>
      <div className={styles.infoContent}>
        {props.time}
      </div>
    </div>
  );
}

export default InfoBar;