import React from 'react';
import { useEffect, useState, useRef } from 'react';
import styles from '../../style/gameStyle.module.css';
const API = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

/**
 * @param
 * score: amount of points
 * number: number of saved scores in leaderboard
 * game: name of the game
 * reload: function to call when game is reset
 */
function Leaderboard(props) {
  const boxFocus = useRef(null);
  const [name, setName] = useState(undefined);
  const [valid, setValid] = useState(false);
  const [showReq, setShowReq] = useState(false);
  const [loadingLead, setLoadingLead] = useState(false);
  const [loadSub, setLoadSub] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);


  useEffect(() => {
    setLoadingLead(true);
    fetch(API+"/leaderboard/"+props.game)
      .then(res => res.json())
      .then(
        (result) => {
          let tempLead = result.leaderboard
          if(result.leaderboard.length > props.number) {
            tempLead = result.leaderboard.splice(0, props.number)
          }
          setLoadingLead(false);
          setLeaderboard(tempLead);
        },
        (error) => {
          let tempLead = mockLeaderboard
          if(mockLeaderboard.length > props.number) {
            tempLead = mockLeaderboard.splice(0, props.number)
          }
          setLoadingLead(false);
          setLeaderboard(tempLead);
        }
      );
  }, [props.game, props.number]);

  const updateName = (e) => {
    setName(e.target.value);
    let check = /^[a-zA-Z0-9]{1,7}$/;
    if (check.test(e.target.value)) {
      setValid(true);
      setShowReq(false);
    }
    else {
      setValid(false);
      setShowReq(true);
    }
  }

  const submitScore = () => {
    setLoadSub(true);
    fetch(API+"/leaderboard/"+props.game, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({'user': name, 'score': props.score})
    })
    .then(res => res.json())
    .then(
      (result) => {
        let tempLead = result.leaderboard
        if(result.leaderboard.length > props.number) {
          tempLead = result.leaderboard.splice(0, props.number)
        }
        setSubmitted(true);
        setLeaderboard(tempLead);
      },
      (error) => {
        let tempLead = mockLeaderboard
        if(mockLeaderboard.length > props.number) {
          tempLead = mockLeaderboard.splice(0, props.number)
        }
        setSubmitted(true);
        setLeaderboard(tempLead);
      }
    );
  }

  const checkKey = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
      props.reload();
    }
  }

  const focusBox = () => {
    boxFocus.current.focus();
  }

  return (
    <div className={styles.leaderboardBox}>
      <div className={styles.leaderboardList} tabIndex="0" onKeyDown={checkKey} onMouseOver={focusBox} ref={boxFocus}>
          <div className={styles.leaderboardTitle}>
            Leaderboard
          </div>
          {loadingLead ?
            <div className={styles.leaderboardListContent}>
              <img src='images/game/component/pikachu-run.gif' className={styles.loadingImage} alt='loading' />
            </div>:
            <div className={styles.leaderboardListContent}>
              {
                leaderboard.map((person, index) => (
                  <div className={styles.leaderboardScores} key={index}>
                    <div>
                      {person.user}
                    </div>
                    <div className={styles.filler}>
                      {Array(9-person.user.length).fill('.')}
                    </div>
                    <div>
                      {person.score}
                    </div>
                  </div>
                ))
              }
            </div>
          }
      </div>
      <div className={styles.leaderboardScore}>
        <div style={{fontWeight:'bolder', marginBottom:'5px'}}>
          Score
        </div>
        <div styles={{marginBottom: '10px'}}>
          {props.score}
        </div>
        <div>
          <input className={styles.textfield} type='text' placeholder='Username' onChange={updateName} />
          {showReq ? 
            <div className={styles.userNameChecks}>
              <ol className={styles.orderedList}>
                <li>No white spaces</li>
                <li>No special characters</li>
                <li>Max lenght of 7</li>
              </ol>
            </div>
          : <div></div>}
          <div>
            {loadSub ?
              <input className={submitted ? styles.submitButtonDone : styles.submitButtonLoad } type='button' value='Submit Score' onClick={submitScore} disabled={true}/>
              :
              <input className={styles.submitButton} type='button' value='Submit Score' onClick={submitScore} disabled={!valid}/>
            }
          </div>
          <div>
            <input className={styles.submitButton} type='button' value='Replay' onClick={props.reload}/>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockLeaderboard = [
  {
    user: 'ABCDEFG',
    score: '600',
  },
  {
    user: 'Phong',
    score: '400',
  },
  {
    user: 'Phong1',
    score: '100',
  },
  {
    user: 'Pho',
    score: '50',
  },
  {
    user: 'Pho',
    score: '20',
  },
  {
    user: 'Phong',
    score: '10',
  },
  {
    user: 'Phong',
    score: '10',
  },
  {
    user: 'Pho',
    score: '5',
  },
  {
    user: 'Phong',
    score: '1',
  },
];

export default Leaderboard;