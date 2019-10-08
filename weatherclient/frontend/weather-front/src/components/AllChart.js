import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { Button } from 'reactstrap';

const URLall = 'http://localhost:3001/values/hourlyall';

class AllChart extends Component {
	chartRef = React.createRef();
	constructor(props){
		super(props);
		this.state = {
			values: [],
			temperature: undefined,
			pressure: undefined,
			humidity: undefined,
			time: undefined,
			error: undefined
		};
	}

	populateChart() {
		axios.get(URLall)
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
						labels: this.state.time,
						datasets: [
							{
								label: 'Humidity',
								data: this.state.humidity,
								backgroundColor: '#b3e3ff',
								borderColor: '#b3e3ff',
								fill: false
							},
							{
								label: 'Temperature',
								data: this.state.temperature,
								type: 'line',
								backgroundColor: '#ff8400',
								borderColor: '#ff8400',
								fill: false,
								
							}
						]
					},
					options: {
						scales: {
							xAxes: [{
								ticks: {
									suggestedMin: 50,
									suggestedMax: 100
								}
							}]
						}
					}
				});	
				console.log(this.state.values.length)
			});
		}

	componentDidMount() {
		this.populateChart()
	}

	render(){
		return (
			<div className="container">
				<div className="chart-container">
					<canvas 
						id="myChart"
						ref={this.chartRef}
					/>
				</div>
			</div>
		)
	}
}
export default AllChart;