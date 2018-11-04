import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CSSHeader extends Component {
    render() {
        return (
            <div className="header row">
                <Link
                    to="/css-land"
                    className="btn btn-dark"
                    style={{
                    float: 'right',
                    marginRight: 40
                }}>Back to CSS Land</Link>
            </div>
        );
    }
}

export default CSSHeader;