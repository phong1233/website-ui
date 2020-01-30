import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import './style.css'

export default class NavButton extends Component {
    render() {
        let name = 'Home';
        if(this.props.address !== '/'){
            name = this.props.address.charAt(1).toUpperCase() + this.props.address.substr(2);
        }
        const link = this.props.address;
        if (name !== 'Home') {
            return (
                <Link to={link}>
                    <button className='button'>
                        {name}
                    </button>
                </Link>
            );
        }
        return (
            <Link to={link}>
                <button className='button'>
                    <HomeIcon />
                </button>
            </Link>
        );
    }
}