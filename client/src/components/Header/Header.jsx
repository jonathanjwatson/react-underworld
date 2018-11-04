import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="row" id="header">
                <Link to="/" className="btn btn-dark" style={{float:'right',marginRight:30}}>Home</Link>
            </div>
        );
    }
}

export default Header;