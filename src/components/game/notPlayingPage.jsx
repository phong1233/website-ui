import React from 'react';
import styles from '../../style/gameStyle.module.css';


function NotPlaying(props) {
  return (
    <div className={styles.notPlaying}>
      <div className={styles.gameTitle}>
        {props.title}
      </div>
      <img className={styles.image} src={'images/play-button.png'} alt='Play button' />
      <div className={styles.hoverInstruction}>
        Click to Play
      </div>
    </div>
  );
}

export default NotPlaying;