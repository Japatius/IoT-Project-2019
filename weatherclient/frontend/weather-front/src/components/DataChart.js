import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';
import { Button } from 'reactstrap';
import { thisTypeAnnotation } from '@babel/types';

const URLpast = 'http://localhost:3001/values/pastday';
const URLall = 'http://localhost:3001/values';
const URLhourly = 'http://localhost:3001/values/hourly'

class DataChart extends Component {

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
			datatype: {
				past: '',
				all: ''
			}
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
								fill: false
							},
							{
								label: 'Temperature',
								data: this.tempData(),
								type: 'line',
								backgroundColor: '#ff8400',
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