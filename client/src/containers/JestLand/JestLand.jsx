import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class JestLand extends Component {
    render() {
        return (
            <div className="row center">
            <Header/>
                <h1>Better get testing!</h1>
                <p>To get past this land, you'll need 100% code coverage.</p>
                <p>Points are as follows: </p>
                <ul>
                    <li>100% Code Coverage for JestLand: 1,000 pts</li>
                    <li>100% Code Coverage for the App: 5,000 pts</li>
                </ul>
            </div>
        );
    }
}

export default JestLand;