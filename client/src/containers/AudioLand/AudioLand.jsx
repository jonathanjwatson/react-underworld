import React, { Component } from 'react';
import Header from '../../components/Header/Header';

class AudioLand extends Component {
    render() {
        return (
            <div className="row center">
            <Header/>
                <h1>I can't hear you!</h1>
                <p>To get past this land, you'll need to play an audio sound from within the component. Start googling!</p>
                <p>Hint: You'll probably want to use an npm package AND you'll have to eject your webpack.</p>
                <p>Points are as follows: </p>
                <ul>
                    <p>Playing a sound from the component: 4,000 pts</p>
                </ul>
            </div>
        );
    }
}

export default AudioLand;