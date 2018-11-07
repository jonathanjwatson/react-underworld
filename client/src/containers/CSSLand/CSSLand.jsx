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
                <p>CSS 1 uses inline styles to design the component. YUCK! <br/>Use classes and ids to style CSS 2 and match the design.</p>
                <p>Points are as follows: </p>
                <ul>
                    <p><strong> Duplicating the page's style:</strong>  3,000 pts</p>
                </ul>
                <Link to="/css-land/1">First Page</Link>
                <Link to="/css-land/2">Second Page</Link>
            </div>
        );
    }
}

export default CSSLand;