import React, { Component } from 'react';
import L3 from './L3';

class L2 extends Component {
    render() {
        return (
            <div>
                <L3 finalValue={this.props.finalValue}/>
            </div>
        );
    }
}

export default L2;