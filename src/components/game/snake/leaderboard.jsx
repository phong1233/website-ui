import React from 'react';
import { useEffect } from 'react';
import styles from './snake.module.css';

function Leaderboard() {
  useEffect(() => {
    console.log('rendered');
  });
  return (
    <div className={styles.leaderboard}>
      <div className={styles.leaderboardContent}>
        <div className={styles.leaderboardTitle}>
          Leaderboard
        </div>
        <div className={styles.leaderboardList}>
          {
            mockLeaderboard.map((person, index) => (
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