import React, { Component } from 'react';
import axios from 'axios';
import * as d3 from 'd3'

const url = 'http://localhost:3100/values';

class Datatest extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataz: [],
            temp: '',
            press: '',
            hum: '',
            timestamp: ''
        };
        this.mapData = this.mapData.bind();
    }

    componentDidMount() {
        axios.get(url)
            .then( results =>  {
                const dataz = results.data;
                const temp = [];
                const press = [];
                const hum = [];
                const timestamp = [];

                // for(let i = 0; i < dataz.length; i++){
                //     temp.push(dataz[i].temp);
                //     press.push(dataz[i].press);
                //     hum.push(dataz[i].hum);
                //     timestamp.push(dataz[i].timestamp);
                // }
                this.setState({
                    dataz, temp, press, hum, timestamp
                });
                console.log(dataz)
            });
    }

    mapData() {
        const dataMap = this.state.dataz.map((temp) => 
            <li>{temp}</li>
        );
        return (
            <ul>{dataMap}</ul>
        )
    }

    render() {
        return (
            
                <div>
                    :D
                </div>
        );
    }
}
export default Datatest;