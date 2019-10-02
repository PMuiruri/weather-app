import React, { Component } from 'react';
import apiConfig from '../key.js';
import Card from './Card.js';
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
      const weekUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${data.id}&units=metric&APPID=${apiConfig.weatherKey}`;
      return fetch(weekUrl)
    }).then(response => response.json())
    .then(weekdata => {
      const weeklyData = weekdata.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({week: weeklyData});
    })
    .catch(error => console.log(error));
  };

  componentDidMount =()=>{
    this.fetchData();
    if(this.state.id !== 0){
      this.fetchWeekData();
    }
  }
  render() {
    var today = this.state.today
    if(typeof(today) !=='undefined'){
      return (
      <div>
        <div className="container-fluid">
        <Card {...today} {...this.state.main} {...this.state.weather}/>
        </div>
      </div>
    );
  } else{
    return <div>No Data</div>
  }
}
}

export default Main;
