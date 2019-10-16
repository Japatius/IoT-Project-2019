import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { urlHourly } from '../Urls';

class HourlyChart extends Component {
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

	timeData = () => {
		return this.state.time.reverse();
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
		axios.get(urlHourly)
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
		this.average()
		this.minValue()
		this.maxValue()
	}

	minValue = () => {
		let min = Math.min.apply(null, this.state.values.map(item => item.temperature))
		return (
			<p className="min-max-avg">Minimum temperature: {min}°C</p>
		)
	}

	maxValue = () => {
		let max = Math.max.apply(null, this.state.values.map(item => item.temperature))
		return (
			<p className="min-max-avg">Maximum temperature: {max}°C</p>
		)
	}

	average = () => {
		const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
		let calc = arrAvg(this.state.temperature);
		let format = calc.toFixed(2);
		return (
			<p className="min-max-avg">Average temperature: {format.toString()}°C</p>
		);
	}

    render() {
        return (
			<div className="container">
				<div className="avg-container">
					{this.average()}
					{this.minValue()}
					{this.maxValue()}
				</div>
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