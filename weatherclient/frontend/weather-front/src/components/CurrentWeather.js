import React, { Component } from 'react';
import '../stylesheets/Weather.css';

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
            }))
	}


    render() {
        return (
            <div className="container-fluid">
                <h4>Current weather inside OAMK window</h4>
                <hr/>
                {this.state.values.map( d => (
                    <div className="data-container">
                        {d.temperature} C
                        <br/>
                        {d.pressure} hPa
                        <br/>
                        {d.humidity} %
                    </div>
                ))}
            </div>
        );
    }
}

export default CurrentWeather;