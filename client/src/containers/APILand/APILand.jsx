import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import './APILand.css';

class APILand extends Component {

    constructor() {
        super()
        this.state = {
            myData: [
                {
                    playerName: 'Merlin',
                    playerRank: 'Wizard',
                    playerHitPoints: '100',
                    playerWins: '3'
                }, {
                    playerName: 'Merlin',
                    playerRank: 'Wizard',
                    playerHitPoints: '100',
                    playerWins: '3'
                }, {
                    playerName: 'Merlin',
                    playerRank: 'Wizard',
                    playerHitPoints: '100',
                    playerWins: '3'
                }
            ]
        }
    }

    //TODO: Add componentDidMount and call the getPlayerStats function

    //TODO: Write a function called getPlayerStats
    //TODO: make the function call /api/playerstats
    //TODO: take the response and set it on state
    //TODO: Bonus: manipulate the response to match existing data names.
    

    render() {
        return (
            <div className="row center">
                <Header/>
                <div className="container">
                    <h1>Uh oh! Looks like we need some data!
                    </h1>
                    <p>We've got a map function that expects to take in an array of objects. To
                        display this page correctly, you'll need to hit the API endpoint and update
                        state.</p>
                    <p>Hint: Some field names may not match up.
                    </p>
                    <p>Points are as follows:
                    </p>
                    <ul className="container left">
                        <p>Successfully make the API Call: 1,000 pts</p>
                        <p>Set State with response: 1,000 pt</p>
                        <p>Write a function to transform incoming data to the proper format: 1,000 pt</p>
                    </ul>
                </div>
                <div className="container">
                    <div className="row center">
                        {this
                            .state
                            .myData
                            .map((banana, i) => {
                                return <div key={i} className="col-sm-3 player-card">
                                    <h1>Name: {banana.playerName}</h1>
                                    <h2>Rank: {banana.playerRank}</h2>
                                    <h3>Hit Points: {banana.playerHitPoints}</h3>
                                    <h4>Wins: {banana.playerWins}</h4>

                                </div>
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default APILand;