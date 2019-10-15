import React, { Component } from 'react';
import moment from 'moment';

class WeatherCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
      <div className=" card weather-card">
        <div className="top">
          <div className="wrapper">
          <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="weather-icon" className="img-responsive float-right"/>
            <p className="temp font-weight-bold">
              <span className="temp-value">{Math.round(this.props.temp)} </span>
              <span className="temp-value"> &deg;C</span>
            </p>
            <h3 className="location">{this.props.description}</h3>
            <p className="mTop">
            <p className="heading font-weight-bold">{this.props.name}</p>
            <p className="date"><span >{moment(this.props.dt*1000).format("dddd")} </span>
            <span>{moment(this.props.dt*1000).format("LL")}</span></p></p>
          </div>
        </div>
      </div>
      </div>
    );
  }

}

export default WeatherCard;
