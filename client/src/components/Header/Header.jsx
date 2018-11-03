import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="row">
                <Link to="/" className="btn btn-info" style={{float:'right',marginRight:30}}>Home</Link>
            </div>
        );
    }
}

export default Header;