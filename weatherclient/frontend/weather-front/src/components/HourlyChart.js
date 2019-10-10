import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { Button } from 'reactstrap';
let URLhourly = 'http://172.20.240.118:1500/values/hourly';

class HourlyChart extends Component {
    chartRef = React.createRef();

	constructor(props){
		super(props);
		this.state = {
			values: [],
			temperature: undefined,
			pressure: undefined,
			humidity: undefined,
			time: undefined,
			error: undefined,
		};
	}

	timeData = () => {
		return this.state.time.reverse();;
	}

	tempData = () => {
		return this.state.temperature.reverse();
	}

	humData = () => {
		return this.state.humidity.reverse();
	}

	presData = () => {
		return this.state.pressure.reverse();
	}

	populateChart() {
		axios.get(URLhourly)
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
						labels: this.timeData(),
						datasets: [
							{
								label: 'Humidity',
								data: this.humData(),
                                backgroundColor: '#b3e3ff',
                                borderColor: '#b3e3ff',
								fill: false,
							},
							{
								label: 'Temperature',
								data: this.tempData(),
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
						legend: {
							display: true
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
	}
    render() {
        return (
			<div className="container">
				<div className="chart-container">
					<canvas 
						id="myChart"
						ref={this.chartRef}
					/>
				</div>
			</div>
        );
    }
}

export default HourlyChart;