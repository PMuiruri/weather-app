import React, { Component } from 'react';
import apiConfig from '../key.js';
import Tile from './Card.js';
class Main extends Component {
  state={
    city:'helsinki',
    id: 0,
    main:{},
    weather:{},
    today: [],
    week:[]
  }
  fetchData = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&APPID=${apiConfig.weatherKey}`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
      this.setState({ today: data, id: data.id, main: data.main, weather:data.weather[0]});
      console.log(data.id);
    })
    .catch(error => console.log(error));
  };
  fetchWeekData = () => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${this.state.id}&units=metric&APPID=${apiConfig.weatherKey}`;
    fetch(weatherUrl)
    .then(response => response.json())
    .then(weekdata => {
      const weeklyData = weekdata.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({week: weeklyData})
    })
    .catch(error => console.log(error));
  };
  componentDidMount =()=>{
    this.fetchData();
    this.fetchWeekData();
  }
  render() {
    var today = this.state.today
    if(typeof(today) !=='undefined'){
      return (
      <div>
        <div className="container-fluid">
        <Tile {...today} {...this.state.main} {...this.state.weather}/>
        </div>
      </div>
    );
  } else{
    return <div>No Data</div>
  }
}
}

export default Main;
