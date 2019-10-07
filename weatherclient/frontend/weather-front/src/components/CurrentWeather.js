import React, { Component } from 'react';
import '../stylesheets/Weather.css';
import DataChart from './DataChart'

class CurrentWeather extends Component {

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
	    }


    render() {
        return (
            <div className="container-fluid">
                {this.state.values.map( d => (
                    <div className="data-container">
                        <div className="data-text">
                            Temperature: {d.temperature} C
                            <br/>
                            Pressure: {d.pressure} hPa
                            <br/>
                            Humidity: {d.humidity} %
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