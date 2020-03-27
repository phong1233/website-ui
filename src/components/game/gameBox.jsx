import React from 'react';
import { useState } from 'react';
import styles from '../../style/gameStyle.module.css';

function GameBox(props) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={styles.box}>
      <div className={styles.playing}>
        <div className={styles.gameTitle}>
          {props.title}
        </div>
        <div className={styles.content}>
          <div className={styles.instruction}>
            <div className={styles.instructionTitle}>Instructions</div>
            <div className={styles.instructionDescription}>{props.description}</div>
            <div className={styles.instructionTitle}>Controls</div>
            {props.wasd && <img className={styles.controls} src='images/wasd-key.png' alt='controls' />}
            {props.arrow && <img className={styles.controls} src='images/arrow-key.png' alt='controls' />}
            {props.keyboard && <img className={styles.controls} src='images/keyboard.png' alt='controls' />}
            {props.mouse && <img className={styles.controls} src='images/computer-mouse.png' alt='controls' />}
          </div>
          <div className={styles.gameSpace}>
            {playing ? props.game :
              <div className={styles.notPlaying} onClick={() => setPlaying(true)}>
                <img className={styles.image} src={'images/play-button.png'} alt='Play button' />
                <div className={styles.hoverInstruction}>
                  Click to Play
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameBox;