import React from 'react';
import { useEffect, useState } from 'react';
import styles from '../../style/gameStyle.module.css';

/**
 * @param
 * score: amount of points
 * number: number of saved scores in leaderboard
 * game: name of the game
 * reload: function to call when game is reset
 */

 // sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function Leaderboard(props) {
  const [name, setName] = useState(undefined);
  const [valid, setValid] = useState(false);
  const [showReq, setShowReq] = useState(false);
  const [loadingLead, setLoadingLead] = useState(false);
  const [loadSub, setLoadSub] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState([]);


  useEffect(() => {
    setLoadingLead(true);
    fetch("https://phong-website-backend.herokuapp.com/leaderboard/"+props.game)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setLoadingLead(false);
          setLeaderboard(result.leaderboard);
        },
        (error) => {
          setLoadingLead(false);
          setLeaderboard(mockLeaderboard);
        }
      );
  }, [props.game]);

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
    console.log('submit score');
    console.log(props.number);
    console.log(props.game);
    console.log(name);
    sleep(3000).then(() => {
      setSubmitted(true);
    });
  }

  return (
    <div className={styles.leaderboardBox}>
      <div className={styles.leaderboardList}>
          <div className={styles.leaderboardTitle}>
            Leaderboard
          </div>
          {loadingLead ?
            <div className={styles.leaderboardListContent}>
              <img src='images/pikachu-run.gif' className={styles.loadingImage} alt='loading' />
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