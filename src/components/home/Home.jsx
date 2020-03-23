import React from 'react';
import styles from '../../style/homeStyle.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageBox from './PageBox';
import Title from '../title';

function HomePage() {
  return (
      <div className={styles.container}>
        <Title title="My website"/>
        <Link to='/game' style={{ textDecoration: 'none', color: 'black' }}>
          <PageBox title={'Game'} link={'images/game-controller.png'}
            description={'List of games that I wrote using react for web browsers.'}  
          />
        </Link>
        <Link to='/project' style={{ textDecoration: 'none', color: 'black' }}>
          <PageBox title={'Project'} link={'images/project.png'}
            description={'Shows all of the project I have worked on. Including side-projects, projects from school, hackathon projects, etc.'}  
          />
        </Link>
        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
          <PageBox title={'About'} link={'images/user.png'}
            description={'About me, where you can find a brief introduction on myself, a resume and much more.'}  
          />
        </Link>
      </div>
  );
}

export default HomePage;