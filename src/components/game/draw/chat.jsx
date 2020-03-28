import React from 'react';
import { useState } from 'react';
import styles from './draw.module.css';

function Chat(props) {
  const [message, setMessage] = useState('');

  const updateMessage = (e) => {
    setMessage(e.target.value);
    if(e.key === 'Enter') {
      props.submit(e.target.value);
    }
  }

  return (
    <div className={styles.chat}>
      <div className={styles.chatLocation}>
        {
          props.messages.map((m, i) => (
            <div className={styles.message} key={i}>
              <div className={styles.chatUsername}>
                {m.user + ':'}
              </div>
              <div className={styles.chatMessage}>
                {m.message}
              </div>
            </div>
          ))
        }
      </div>
      <div className={styles.chatSend}>
        <input className={styles.inputText} type='text' onKeyUp={updateMessage}/>
        <div className={styles.send} onClick={() => {props.submit(message)}}>
          <img src='images/game/draw/send.png' alt='send' className={styles.sendIcon}/>
        </div>
      </div>
    </div>
  );
}

export default Chat;