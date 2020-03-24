import React from 'react';
import styles from '../style/navStyle.module.css';
import homeStyles from '../style/homeStyle.module.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavButton from './button/navButton';
import Title from './title';
import PageBox from './home/PageBox';

import GamePage from './game/gamePage';

function Navigation(props) {
  const [current, setCurrent] = useState(undefined)

  useEffect(() => {
    let url =  require('url');
    let website = url.parse(window.location.href);
    setCurrent(website.path);
  }, []);

  return (
    <Router>
      <div className={styles.navBar}>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/')}>
          <NavButton text={'Home'} isCurrent={'/' === current} />
        </Link>
        <Link to='/game' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/game')}>
          <NavButton text={'Game'} isCurrent={'/game' === current} />
        </Link>
        <Link to='/project' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/project')}>
          <NavButton text={'Project'} isCurrent={'/project' === current} /> 
        </Link>
        <Link to='/about' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/about')}>
          <NavButton text={'About'} isCurrent={'/about' === current}/>
        </Link>
      </div>
      <main>
        <Switch>
          <Route path='/' exact component={() => { return(
            <div className={homeStyles.container}>
              <Title title="My website"/>
              <Link to='/game' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/game')}>
                <PageBox title={'Game'} link={'images/game-controller.png'}
                  description={'List of games that I wrote using react for web browsers.'}  
                />
              </Link>
              <Link to='/project' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/project')}>
                <PageBox title={'Project'} link={'images/project.png'}
                  description={'Shows all of the project I have worked on. Including side-projects, projects from school, hackathon projects, etc.'}  
                />
              </Link>
              <Link to='/about' style={{ textDecoration: 'none', color: 'black' }} onClick={() => setCurrent('/about')}>
                <PageBox title={'About'} link={'images/user.png'}
                  description={'About me, where you can find a brief introduction on myself, a resume and much more.'}  
                />
              </Link>
            </div>
          );}} />
          <Route path='/game' exact component={() => <GamePage/>} />
          <Route path='/project' exact component={() => <ProjectPage/>} />
          <Route path='/about' exact component={() => <AboutPage/>} />
        </Switch>
      </main>
    </Router>
  );
}

function ProjectPage() {
  return (<div style={{padding: '100px 50px'}}><Title title={'Projects'}/></div>);
}
function AboutPage() {
  return (<div style={{padding: '100px 50px'}}><Title title={'About'}/></div>);
}

export default Navigation;