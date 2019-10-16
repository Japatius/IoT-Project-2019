import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { urlAll } from '../Urls';

class AllChart extends Component {
	chartRef = React.createRef();
	constructor(props){
		super(props);
		this.state = {
			values: [],
			temperature: [],
			pressure: [],
			humidity: [],
			time: []
		};
	}

	populateChart() {
		axios.get(urlAll)
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
						responsive: true,
						layout:{
							padding:{
								left: 100,
								right: 100,
								top: 0,
								bottom: 0
							}
						},
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
			});
		}
	
	componentDidMount() {
		this.populateChart()
		this.average()
	}

	average = () => {
		const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
		let calc = arrAvg(this.state.temperature);
		let format = calc.toFixed(2);
		return (
			<p>Average temperature: {format.toString()}°C</p>
		);
	}

	render(){
		return (
			<div className="container">
				<div className="avg-container">
					{this.average()}
				</div>
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