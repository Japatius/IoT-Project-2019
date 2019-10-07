import React, { Component } from 'react';
import '../stylesheets/Weather.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataChart from './DataChart'

class CurrentWeather extends Component {

	state = {
		values: [],
		temperature: undefined,
		pressure: undefined,
        humidity: undefined,
        time_of_date: undefined,
	};


	componentDidMount(){
		fetch(`http://localhost:3001/values/current`)
			.then(res => res.json())
			.then(json => this.setState({
				values: json
            }));
	    }


    render() {
        return (
            <div className="container-fluid">
                {this.state.values.map( d => (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Weather OAMK</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{d.time_of_date}</h6>
                            <p class="card-text">Temperature: {d.temperature} °C</p>
                            <p class="card-text">Pressure: {d.pressure} hPa</p>
                            <p class="card-text">Humidity: {d.humidity} %</p>
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