import React, { Component } from 'react';
import '../stylesheets/Weather.css'
import AllChart from './AllChart';
import HourlyChart from './HourlyChart';

class DataChart extends Component {
	constructor(props){
		super(props);
		this.state = {
			toggle: true
		};
	}

	toggleAll = () => {
		this.setState({
			toggle: false
		})
	}

	toggleHour = () => {
		this.setState({
			toggle: true
		})
	}

    render() {
        return (
			<div classname="container">
				<div className="btn-container">
					<button onClick={this.toggleAll}>all</button>
					<button onClick={this.toggleHour}>past 24h</button>
				</div>
				<div className="chart-container">
					{this.state.toggle === true
					?
					<HourlyChart/>
					:
					<AllChart/>
					}
				</div>
			</div>
        );
    }
}
export default DataChart;