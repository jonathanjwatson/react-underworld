import React, { Component } from 'react';
import CSSHeader from '../../../components/CSSHeader/CSSHeader';

class CSS2 extends Component {
    render() {
        return (
            <div className="container">
            <CSSHeader/>
            <div className="row">
                <div onClick={() => {alert("I'm blue!")}}>
                    <h1>Welcome to React</h1>
                </div>
                <div onClick={() => {alert("I'm green!")}}>
                    <h1>Underworld</h1>
                </div>
            </div>
            <div className="row">
                <div onClick={() => {alert("I'm red!")}}>
                    <h1>This is</h1>
                </div>
                <div onClick={() => {alert("I'm yellow!")}}>
                    <h1>the Rainbow Dungeon</h1>
                </div>
            </div>
            <div className="row">
                <div onClick={() => {alert("I'm orange!")}}>
                    <h1>This is a dangerous</h1>
                </div>
                <div onClick={() => {alert("I'm purple!")}}>
                    <h1>place</h1>
                </div>
            </div>
            <div className="row">
                <div onClick={() => {alert("I'm gray!")}}>
                    <h1>And watch</h1>
                </div>
                <div onClick={() => {alert("I'm brown!")}}>
                    <h1>your style.</h1>
                </div>
            </div>
            </div>
        );
    }
}

export default CSS2;