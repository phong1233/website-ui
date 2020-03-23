import React from 'react';
import styles from '../../style/homeStyle.module.css';
import PageBox from './PageBox';

function HomePage() {
  return (
    <div className={styles.container}>
      <PageBox title={'Game'} link={'images/game-controller.png'}
        description={'List of games that I wrote using react for web browsers.'}  
      />
      <PageBox title={'Project'} link={'images/project.png'}
        description={'Shows all of the project I have worked on. Including side-projects, projects from school, hackathon projects, etc.'}  
      />
      <PageBox title={'About'} link={'images/user.png'}
        description={'About me, where you can find a brief introduction on myself, a resume and much more.'}  
      />
    </div>
  );
}

export default HomePage;