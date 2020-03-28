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
              <Title title="Welcome"/>
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
  return (<div style={{padding: '100px 50px', color:'white'}}><Title title={'About'}/>
    <div>Send Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Timer Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Friend Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>    <div>Trash can Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Eraser Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>      <div>Electricity Icons made by <a href="https://www.flaticon.com/authors/fjstudio" title="fjstudio">fjstudio</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Controller Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Project Icons made by <a href="https://www.flaticon.com/authors/ddara" title="dDara">dDara</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>User Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Play Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Mouse Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>WASD Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Arrow Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <div>Keyboard Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </div>);
}

export default Navigation;