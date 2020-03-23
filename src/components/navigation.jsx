import React from 'react';
import styles from '../style/navStyle.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavButton from './button/navButton';
import HomePage from './home/Home';

function Navigation(props) {
  return (
    <Router>
      <div className={styles.navBar}>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <NavButton text={'Home'} />
        </Link>
        <Link to='/game' style={{ textDecoration: 'none', color: 'black' }}>
          <NavButton text={'Game'} />
        </Link>
        <Link to='/project' style={{ textDecoration: 'none', color: 'black' }}>
          <NavButton text={'Project'} /> 
        </Link>
        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }}>
          <NavButton text={'About'} />
        </Link>
      </div>
      <main>
        <Switch>
          <Route path='/' exact component={() => <HomePage/>} />
          <Route path='/game' exact component={() => <GamePage/>} />
          <Route path='/project' exact component={() => <ProjectPage/>} />
          <Route path='/about' exact component={() => <AboutPage/>} />
        </Switch>
      </main>
    </Router>
  );
}


function GamePage() {
  return (<div style={{color:'white'}}>gamepage</div>);
}
function ProjectPage() {
  return (<div style={{color:'white'}}>projectpage</div>);
}
function AboutPage() {
  return (<div style={{color:'white'}}>aboutpage</div>);
}

export default Navigation;