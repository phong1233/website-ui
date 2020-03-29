import React from 'react';
import { useState } from 'react';
import styles from './draw.module.css';
import DrawGame from './drawgame';

function Draw() {
  const [username, setUsername] = useState(undefined);
  const [valid, setValid] = useState(false);
  const [loggin, setLoggin] = useState(false);

  const updateName = (e) => {
    setUsername(e.target.value);
    let check = /^[a-zA-Z0-9]{1,7}$/;
    if (check.test(e.target.value)) {
      setValid(true);
    }
    else {
      setValid(false);
    }
  }

  const submitScore = () => {
    setLoggin(true)
  }

  const logout = () => {
    setLoggin(false);
  }

  return (loggin ? 
    <DrawGame username={username} logout={logout} /> :
    <div className={styles.drawlogin}>
      <div className={styles.textLogin}>
        Enter a username to join the game:
      </div>
      <input className={styles.usernameField} type='text' placeholder='Username' onChange={updateName} />
      <div>
        <ul className={styles.unorderedList}>
          <li>No white spaces</li>
          <li>No special characters</li>
          <li>Max lenght of 7</li>
        </ul>
      </div>
      <input className={styles.submitButton} style={valid ? {} : 
        {boxShadow: '0px 0px 10px red'}
      } type='button' value='Join Game' onClick={submitScore} disabled={!valid}/>
    </div>
  );
}

export default Draw;