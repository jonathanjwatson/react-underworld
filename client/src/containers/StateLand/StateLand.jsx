import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import L1 from './LeftTree/L1';
import R1 from './RightTree/R1';


class StateLand extends Component {

    constructor(){
        super()
        this.state = {
            finalValue: 10
        }
    }

    randomValueGenerator = () => {
        const max = 100;
        const min = 1;
        let x = Math.random() * (max - min) + min;
        console.log(x);
        this.setState({finalValue: x})
    }
    render() {
        return (
            <div className="row center">
            <Header/>
                <h1>Time to get some state!</h1>
                <p>This dark land has two trees. The tree on the left has props passed all the way down, just so it can display a single value. Use a state management tool of your choice to pass the value directly into the final component.<br />I'm auto-generating a new value to state with each button click. So no cheating!</p>
                <p>Points are as follows: </p>
                <ul>
                    <p><strong> React Context API:</strong>  3,000 pts</p>
                    <p><strong> Alernative State Management:</strong>  2,000 pts</p>
                    <p><strong> Redux:</strong>  -5,000 pts (seriously, just don't do it)</p>
                </ul>
                <button onClick={this.randomValueGenerator} className="btn btn-primary">Generate Random Number </button>
                <div className="row">
                    <div className="col-sm-6">
                    <L1 finalValue={this.state.finalValue} />
                    </div>
                    <div className="col-sm-6">
                    <R1/>
                    </div>
                </div>
            </div>
        );
    }
}

export default StateLand;