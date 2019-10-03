import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, Switch } from 'react-router-dom';
import DataChart from './components/DataChart';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';
import Historical from './components/Historical';
import Header from './components/Header';

class App extends Component {
	render(){
    	return (
      		<div className="App">
				<Header/>
				<div className="route-container">
					<Route path="/" exact component={CurrentWeather}/>
					<Route path="/historical/" exact component={Historical}/>
				</div>
      		</div>
    	);
  	}
}

export default App;
