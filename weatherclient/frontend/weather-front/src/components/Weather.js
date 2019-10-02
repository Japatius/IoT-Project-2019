import React, { Component } from 'react';

class Weather extends Component {

    state = {
		values: [],
		temperature: undefined,
		pressure: undefined,
		humidity: undefined,
		error: undefined
	};

	componentDidMount(){
		fetch(`http://localhost:3001/values`)
			.then(res => res.json())
			.then(json => this.setState({
				values: json
			}))
	}
    render() {
        return (
            <div className="weather-container">
                <div className="weather-data">
                    {this.state.values.map(asd => (
						<p>
                            {asd.temperature}
                            {asd.time_of_date}
						</p>
				    ))}
                </div>
            </div>
        );
    }
}

export default Weather;