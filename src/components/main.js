import React, { Component } from 'react';
import apiConfig from '../key.js'
class Main extends Component {
  state={
    city:'helsinki',
  }
  fetchData = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=${apiConfig.weatherKey}`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => console.log(error));
  };
  componentDidMount =()=>{
    this.fetchData();
  }


  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }

}

export default Main;
