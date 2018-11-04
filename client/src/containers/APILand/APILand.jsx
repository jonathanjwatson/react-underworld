import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class APILand extends Component {

    constructor(){
        super()
        this.state = {
            myData: [
                {
                    playerName: 'Merlin',
                    playerRank: 'Wizard',
                    playerHitPoints: '100',
                    playerWins: '3'
                }
            ]
        }
    }
    render() {
        return (
            <div className="row center">
            <Header/>
            <div className="row">
                <h1>Uh oh! Looks like we need some data! </h1>
                <p>We've got a map function that expects to take in an array of objects. To display this page correctly, you'll need to hit the API endpoint and update state.</p>
                <p>Hint: Some field names may not match up. </p>
                <p>Points are as follows: </p>
                <ul>
                    <li>Successfully make the API Call: 1,000 pts</li>
                    <li>Set State with response: 1,000 pts</li>
                    <li>Write a function to transform incoming data to the proper format: 1,000 pts</li>
                </ul>
                </div>
                <div className="row">
                {this.state.myData.map((banana, i) => {
                    return <div key={i}>{banana.playerName}</div>
                })} 
                </div>
            </div>
        );
    }
}

export default APILand;