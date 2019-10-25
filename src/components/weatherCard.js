import React, { Component } from 'react';
import moment from 'moment';

class WeatherCard extends Component {
  render() {
    return (
      <div className=" card weather-card">
        <div className="top ">
          <div className="wrapper">
          <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="weather-icon" className="img-responsive float-right"/>
            <p className="date">
              <span >{moment(this.props.dt*1000).format("dddd")} </span>
              <span>{moment(this.props.dt*1000).format("LL")}</span>
            </p>
            <p className="heading font-weight-bold">{this.props.name}</p>
            <p className="font-weight-bold mTop">
              <span className="temp-value">{Math.round(this.props.temp)} </span>
              <span className="temp-value"> &deg;C</span>
              <p className="description h-100">{this.props.description}</p></p>
            </div>
          </div>
      </div>
    );
  }

}

export default WeatherCard;
