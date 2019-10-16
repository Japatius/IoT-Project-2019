import React, {Component} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import CurrentWeather from './components/CurrentWeather';
import Historical from './components/Historical';
import Header from './components/Header';
import PressHumCharts from './components/PressHumCharts';

class App extends Component {
	render(){
    	return (
      		<div className="App">
				<Header/>
				<div className="route-container">
					<Route path="/" exact component={CurrentWeather	}/>
					<Route path="/historical/" exact component={Historical}/>
					<Route path="/charts/" exact component={PressHumCharts}/>
				</div>
      		</div>
    	);
  	}
}

export default App;
