import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Datatest from './components/Datatest';
import D3_chart from './components/D3_chart';

class App extends Component {
	render(){
    	return (
      		<div>
        		<div>
          			<Header/>
        		</div>
        		<div>
          			<Datatest/>
        		</div>
				<div>
					<D3_chart/>
				</div>
      		</div>
    	);
  	}
}

export default App;
