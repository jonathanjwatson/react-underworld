import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import axios from 'axios';

class AuthorizationLand extends Component {

    componentDidMount(){
        //TODO: Create an object with the necromancer's name and password (HINT: Check the Server for the expected values).
        //TODO: Sign object with a JWT and the string (HINT: secret MUST be pulled in as env var)
        let token = '';
        axios({
            method: "GET",
            url: "/api/authorization",
            headers: {'Authorization': token}
        })
        .then((response) => {
            
            console.log(response);
        })
        .catch((err) => {
            alert("You're unauthorized!");
        })
    }
    render() {
        return (
            <div className="row center">
            <Header/>
                <h1>YOU'RE TRAPPED!</h1>
                <p>You are not authorized to leave this dungeon! You're going to need to pretend to be the necromancer to get out. </p>
                <p>Points are as follows: </p>
                <ul>
                    <li>100% Code Coverage for JestLand: 1,000 pts</li>
                    <li>100% Code Coverage for the App: 5,000 pts</li>
                </ul>
            </div>
        );
    }
}

export default AuthorizationLand;