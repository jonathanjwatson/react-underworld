import React, { Component } from 'react';
import CSSHeader from '../../../components/CSSHeader/CSSHeader';

class CSS1 extends Component {
    render() {
        return (
            <div className="container">
            <CSSHeader/>
            <div className="row">
                <div style={{backgroundColor: 'blue', minHeight: '20vh', width: '66%', display:'inline-block'}} onClick={() => {alert("I'm blue!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>Welcome to React</h1>
                </div>
                <div style={{backgroundColor: 'green', minHeight: '20vh', width: '33%', display:'inline-block'}} onClick={() => {alert("I'm green!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>Underworld</h1>
                </div>
            </div>
            <div className="row">
                <div style={{backgroundColor: 'red', minHeight: '20vh', width: '33%', display:'inline-block'}} onClick={() => {alert("I'm red!")}}>
                    <h1 style={{color: 'black', textAlign:'center',margin: 0, lineHeight:'20vh'}}>This is</h1>
                </div>
                <div style={{backgroundColor: 'yellow', minHeight: '20vh', width: '66%', display:'inline-block'}} onClick={() => {alert("I'm yellow!")}}>
                    <h1 style={{color: 'black', textAlign:'center',margin: 0, lineHeight:'20vh'}}>the Rainbow Dungeon</h1>
                </div>
            </div>
            <div className="row">
                <div style={{backgroundColor: 'orange', minHeight: '20vh', width: '66%', display:'inline-block'}} onClick={() => {alert("I'm orange!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>This is a dangerous</h1>
                </div>
                <div style={{backgroundColor: 'purple', minHeight: '20vh', width: '33%', display:'inline-block'}} onClick={() => {alert("I'm purple!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>place</h1>
                </div>
            </div>
            <div className="row">
                <div style={{backgroundColor: 'gray', minHeight: '20vh', width: '33%', display:'inline-block'}} onClick={() => {alert("I'm gray!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>And watch</h1>
                </div>
                <div style={{backgroundColor: 'brown', minHeight: '20vh', width: '66%', display:'inline-block'}} onClick={() => {alert("I'm brown!")}}>
                    <h1 style={{color: 'white', textAlign:'center',margin: 0, lineHeight:'20vh'}}>your style.</h1>
                </div>
            </div>
            </div>
        );
    }
}

export default CSS1;