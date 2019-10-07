import React, { Component } from 'react';
import moment from 'moment';
import {Row,  Col} from "react-bootstrap";

class Week extends Component {
  render() {
  console.log(this.props.reading);
  console.log(this.props.reading.weather[0].description);

    return (
        <div className="week-card">
          <div className="float-left">
            <p>{moment(this.props.reading.dt*1000).format("dddd")}</p>
            <img src={`http://openweathermap.org/img/wn/${this.props.reading.weather[0].icon}@2x.png`} alt="weather-icon" className="img-responsive h-75"/>
          </div>
          <div className="float-right">
            <p>{this.props.reading.main.temp}°C</p>
            <p className="float-left">{this.props.reading.weather[0].description}</p>
          </div>
        </div>
    );
  }
}

export default Week;
