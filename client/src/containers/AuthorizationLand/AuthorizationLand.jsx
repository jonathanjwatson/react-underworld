import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import axios from 'axios';
import jwt from 'jsonwebtoken';

class AuthorizationLand extends Component {

    componentDidMount(){
        let necromancerObject = {
            name: '',
            password: ''
        }
        //TODO: Sign object with a JWT and the string (HINT: secret MUST be pulled in as env var)
        let token = jwt.sign(necromancerObject, 'myJWTSecretString');
        axios({
            method: "GET",
            url: "/api/authorization",
            headers: {'Authorization': token}
        })
        .then((response) => {
            console.log(response);
            alert(response.data);
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
                    <p><strong> Successfully make the API call:</strong>  1,000 pts</p>
                    <p><strong> Sign your secret with a process.env variable:</strong>  4,000 pts</p>
                </ul>
            </div>
        );
    }
}

export default AuthorizationLand;