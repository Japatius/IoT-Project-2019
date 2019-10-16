import React, { Component } from 'react';
import axios from 'axios';
import '../stylesheets/Weather.css'
import Chart from 'chart.js';   
import { urlAll, urlHourly } from '../Urls'
class HumidityChart extends Component {
    chartRef = React.createRef();
    constructor(props){
        super(props);
        this.state = {
            values: [],
            pressure: [],
            humidity: [],
            time: []
        }
    }
    
    componentDidMount() {
        this.fillChart()
        this.average()
    }

	fillChart() {
		axios.get(urlHourly)
			.then(res => {
				const values = res.data;
				const pressure = [];
				const humidity = [];
				const time = [];
				
				for (let i = 0; i < values.length; i++) {
					pressure.push(values[i].pressure);
					humidity.push(values[i].humidity);
					time.push(values[i].time_of_date);
				}
				this.setState({
					values, pressure, humidity, time
				});
				
				const myChartRef = this.chartRef.current.getContext('2d');
				new Chart (myChartRef, {
					type: 'bar',
					data: {
						labels: this.state.time,
						datasets: [
							{
								label: 'Humidity',
								data: this.state.humidity,
								backgroundColor: '#b3e3ff',
								borderColor: '#b3e3ff',
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
        
    average = () => {
        const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
        let calc = arrAvg(this.state.humidity);
        let format = calc.toFixed(2);
        return (
            <p>Average Humidity: {format.toString()}%</p>
        );
    }	
    

    render() {
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
        );
    }
}

export default HumidityChart;