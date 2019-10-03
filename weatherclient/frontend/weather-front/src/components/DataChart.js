import React, { Component } from 'react';

import Chart from 'chart.js';
//const url = 'http://localhost:3001/values';

class DataChart extends Component {

	chartRef = React.createRef();

	state = {
		values: [],
		temperature: undefined,
		pressure: undefined,
		humidity: undefined,
		error: undefined
	};


	componentDidMount(){
		fetch(`http://localhost:3001/values/current`)
			.then(res => res.json())
			.then(json => this.setState({
    			values: json
			}));
			this.chartti()
		}
	  
chartti(){
	const myChartRef = this.chartRef.current.getContext('2d');
	new Chart (myChartRef, {
		type: 'line',
		data: {
			labels: ["Placeholder","Placeholder","Placeholder"],
			datasets: [
				{
					label:"what?wher?",
					data:[this.state.values.id]
				
				}
			]
		}
	});
}





    render() {
        return (
			<div>
				<canvas 
					id="myChart"
					ref={this.chartRef}
				/>
			</div>
        );
    }
}
export default DataChart;