import React, { Component } from 'react';
import './CSSLand.css';
import Header from '../../components/Header/Header';
import {Link} from 'react-router-dom';

class CSSLand extends Component {
    render() {
        return (
            <div className="row center">
            <Header/>
                <h1>Something has gone horribly wrong!</h1>
                <p>CSS 1 is looking great! But CSS 2 is terrible! </p>
                <p>Style CSS 2 to match CSS 1</p>
                <p>Points are as follows: </p>
                <ul>
                    <li>Playing a sound from the component: 4,000 pts</li>
                </ul>
                <Link to="/css-land/1">First Page</Link>
                <Link to="/css-land/2">Second Page</Link>
            </div>
        );
    }
}

export default CSSLand;