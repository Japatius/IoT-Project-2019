import React, { Component } from 'react';

const URLavg = 'http://172.20.240.118:1500/values/average';

class Average extends Component {

	componentDidMount(){

    }
		
    render() {
        return (
            <div>
               <p>{this.state.avgTemp}</p>
            </div>
        );
    }
}

export default Average;