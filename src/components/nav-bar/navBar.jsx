import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './style.css'

import NavButton from './navButton';
import HomePage from './../home/homePage';

export default class NavBar extends Component {
    render() {
        return (
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                <div className='navBar'>
                    <nav>
                        <NavButton address='/'/>
                        <NavButton address='/about'/>
                        <NavButton address='/users'/>
                    </nav>
                </div>
                <Switch>
                        <Route path="/about">
                        <About />
                        </Route>
                        <Route path="/users">
                        <Users />
                        </Route>
                        <Route path="/">
                        <HomePage />
                        </Route>
                </Switch>
            </Router>
        );
    }
  }

class About extends Component {
    render() {
        return (<h2 style={{position:'absolute', zIndex:-1}}>About</h2>);
    }
}

class Users extends Component {
    render() {
        return (<h2 style={{position:'absolute', zIndex:-1}}>Users</h2>);
    }
}
