import React, { Component } from 'react';
import apiConfig from '../key.js'
class Main extends Component {
  state={
    city:'helsinki',
    id:658225,
    dailyData:{},
    weekData:{}
  }
  fetchData = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=${apiConfig.weatherKey}`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({ dailyData: data, id: data.id});
      console.log('Day: '+ JSON.stringify(data));
      console.log('Id: '+data.id);
    })
    .catch(error => console.log(error));
  };
  fetchWeekData = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${this.state.id}&units=metric&APPID=${apiConfig.weatherKey}`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(weekdata => {
      const dailyData = weekdata.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({
        weekData: dailyData
      }, () => console.log(this.state))
    })
    .catch(error => console.log(error));
  };
  componentDidMount =()=>{
    this.fetchData();
    this.fetchWeekData();
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
