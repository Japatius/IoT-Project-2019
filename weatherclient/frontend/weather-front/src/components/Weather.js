import React, { Component } from 'react';
import '../stylesheets/Weather.css';
import Chart from 'chart.js';

class Weather extends Component {
    state = {
		values: [],
		temperature: undefined,
		pressure: undefined,
		humidity: undefined,
		time_of_date: undefined,
		error: undefined
	};

	componentDidMount(){
		fetch(`http://localhost:3001/values`)
			.then(res => res.json())
			.then(json => this.setState({
				values: json
			}));
		}
		
    render() {
        return (
            <div className="weather-container">
                <div className="weather-data">
					<table>
						{this.state.values.map( x => (
							<tr>
								<td>{x.time_of_date}</td>
								<td>{x.temperature}°C</td>
								<td>{x.pressure} hPa</td>
								<td>{x.humidity}%</td>
							</tr>
						))}
						</table>
                </div>
            </div>
        );
    }
}

export default Weather;