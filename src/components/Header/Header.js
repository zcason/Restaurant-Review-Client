import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <Link
                className={'header-link'}
                to={'/'}>
                <h1>Restaurant Review</h1>
            </Link>
        );
    }
}

export default Header;