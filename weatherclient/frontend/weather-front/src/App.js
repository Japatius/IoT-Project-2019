import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import D3_chart from './components/D3_chart';
import Weather from './components/Weather';
import CurrentWeather from './components/CurrentWeather';

class App extends Component {
	render(){
    	return (
      		<div className="App">
        		<div>
          			<Header/>
        		</div>
				{/* <div>
					<D3_chart/>
				</div> */}
				{/* <div>
					<Weather/>
				</div> */}
				<div>
					<CurrentWeather/>
				</div>
      		</div>
    	);
  	}
}

export default App;
