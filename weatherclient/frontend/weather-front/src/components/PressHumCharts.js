import React, { Component } from 'react';
import PressureChart from './PressureChart';
import HumidityChart from './HumidityChart';
import CurrentWeather from './CurrentWeather';

class PressHumCharts extends React.Component {
    state = {
        toggle: false
    }

    setPressure = () => {
        this.setState({
            toggle: true
        })
    }

    setHumidity = () => {
        this.setState({
            toggle: false
        })
    }

    render() {
        return (
            <div>
                <div className="btn-container">
                    <button onClick={this.setHumidity}>Pressure</button>
                    <button onClick={this.setPressure}>Humidity</button>
                </div>
                {this.state.toggle === true
                    ? <HumidityChart/> 
                    : <PressureChart/>
                }
                
            </div>
        )
    }
}
export default PressHumCharts;