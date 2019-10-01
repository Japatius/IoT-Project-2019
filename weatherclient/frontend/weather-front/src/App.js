import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Datatest from './components/Datatest';

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
      		</div>
    	);
  	}
}

export default App;
