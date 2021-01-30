import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CoverPage.css';

class CoverPage extends Component {
    state = {}
    render() {
        return (
            <div className={'background'}>
                <h1>Restaurant Review</h1>
                <h3>What is Restaurant Review?</h3>
                <p>
                    Restaurant Review is a web app not just for reading reviews,
                    but also for sharing your dining experiences with other users.
                </p>
                <p>Want to try it out? Click on the button below.</p>
                <Link className={'link'} to={'/restaurants'}>
                    <button>Enter</button>
                </Link>
            </div>
        );
    }
}

export default CoverPage;