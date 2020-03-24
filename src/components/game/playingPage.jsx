import React from 'react';
import styles from '../../style/gameStyle.module.css';
import Snake from './snake/snake';

function Playing(props) {
  return (
    <div className={styles.playing}>
      <div className={styles.gameTitle}>
        {props.title}
      </div>
      <div className={styles.content}>
        <div className={styles.instruction}>
          <div className={styles.instructionTitle}>Instructions</div>
          <div className={styles.instructionDescription}>{props.description}</div>
          <div className={styles.instructionTitle}>Controls</div>
          <img className={styles.controls} src='images/wasd_keys.png' alt='controls' />
        </div>
        <div className={styles.gameSpace}>
          {{
              'Snake': <Snake/>,
              '2048': '2048'
            }[props.title]
          }
        </div>
      </div>
    </div>
  );
}
export default Playing;