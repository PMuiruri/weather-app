import React, { Component } from 'react';
import moment from 'moment';

class Week extends Component {
  render() {
    return (
        <div className="week-card flex-column">
            <p className="font-weight-bold">{moment(this.props.reading.dt*1000).format("dddd")}</p>
              <p>{Math.round(this.props.reading.main.temp)} °C</p>
              <i className={`owi owi-${this.props.reading.weather[0].icon} owi-5x`}></i>
            <p className="font-weight-bold">{this.props.reading.weather[0].description}</p>
        </div>
    );
  }
}
export default Week;
