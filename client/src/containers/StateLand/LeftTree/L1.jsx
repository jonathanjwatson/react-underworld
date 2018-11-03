import React, { Component } from 'react';
import L2 from './L2';

class L1 extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <L2 finalValue={this.props.finalValue}/>
            </div>
        );
    }
}

export default L1;