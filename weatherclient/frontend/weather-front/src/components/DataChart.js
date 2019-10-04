import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { Button } from 'reactstrap';

class DataChart extends Component {

	chartRef = React.createRef();

	state = {
		values: [],
		temperature: undefined,
		pressure: undefined,
		humidity: undefined,
		time: undefined,
		error: undefined,
	};

	populateChart() {
		axios.get('http://localhost:3001/values')
			.then(res => {
				const values = res.data;
				const temperature = [];
				const pressure = [];
				const humidity = [];
				const time = [];
				
				for (let i = 0; i < values.length; i++) {
					temperature.push(values[i].temperature);
					pressure.push(values[i].pressure);
					humidity.push(values[i].humidity);
					time.push(values[i].time_of_date);
				}
				this.setState({
					values, temperature, pressure, humidity, time
				});
				const myChartRef = this.chartRef.current.getContext('2d');
				new Chart (myChartRef, {
					type: 'line',
					data: {
						labels: time,
						datasets: [
							{
								label:"Temperature",
								data: temperature
							}
						]
					}
				});	
			});
		}


	componentDidMount() {
		this.populateChart()
	}

		//  componentDidUpdate() {
		//  	this.populateChart()
		//  }

    render() {
        return (
			<div classname="container">
				<div className="chart-container">
					<Button outline color="primary">temperature</Button>
					<canvas 
						id="myChart"
						ref={this.chartRef}
					/>
				</div>
			</div>
        );
    }
}
export default DataChart;