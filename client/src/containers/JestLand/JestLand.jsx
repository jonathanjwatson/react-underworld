import React, {Component, Fragment} from 'react';
import Header from '../../components/Header/Header';

class JestLand extends Component {

    constructor() {
        super()
        this.state = {
            startTime: 0,
            remainder: 0
        }
    }

    componentDidMount() {
        let startTime = Date.now();
        let remainder = (startTime % 2);
        console.log(remainder);
        console.log(startTime);
        this.setState({startTime, remainder});
    };

    //TODO:
    render() {
        return (
            <Fragment>
                <div className="row center">
                    <Header/>
                    <h1>Better get testing!</h1>
                    <p>To get past this land, you'll need 100% code coverage.</p>
                    <p>Points are as follows:
                    </p>
                    <ul>
                        <p><strong> 100% Code Coverage for JestLand:</strong>  1,000 pts</p>
                        <p><strong> 100% Code Coverage for the App:</strong>  5,000 pts</p>
                    </ul>
                </div>
                <div className="container center">
                    {(this.state.remainder === 0) && <div><h2>Zero</h2></div>}
                </div>
                <div className="container center">
                    {(this.state.remainder === 1) && <div><h2>One</h2></div>}
                </div>
            </Fragment>
        );
    }
}

export default JestLand;