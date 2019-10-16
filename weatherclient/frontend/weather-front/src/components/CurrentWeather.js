import React, { Component } from 'react';
import '../stylesheets/Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataChart from './DataChart'
import axios from 'axios';
import { urlCurrent } from '../Urls';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
	    this.state = {
		    values: [],
		    temperature: [],
		    pressure: [],
            humidity: [],
            time_of_date: [],
        };
    }

	componentDidMount(){
		axios.get(urlCurrent)
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
            });
        };

    // <p>°C</p>

    render() {
        return (
            <div className="container-fluid">
                {this.state.values.map( d => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Weather OAMK</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{d.time_of_date}</h6>
                            <h1 className="card-title">{d.temperature}<p id="celsius"> °C</p></h1>
                            <div className="value-container">
                                <p className="card-text" id="data-text">Pressure: {d.pressure} hPa</p>
                                <p className="card-text" id="data-text">Humidity: {d.humidity} %</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div>
                    <DataChart/>
                </div>
            </div>
        );
    }
}

export default CurrentWeather;