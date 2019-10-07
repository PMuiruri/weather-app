import React, { Component } from 'react';
import moment from 'moment';

class Week extends Component {
  render() {
  console.log(this.props.reading);
  console.log(this.props.reading.weather[0].description);

    return (
        <div className="week-card flex-column">
            <p>{moment(this.props.reading.dt*1000).format("dddd")}</p>
              <p>{this.props.reading.main.temp}°C</p>
              <i className={`owi owi-${this.props.reading.weather[0].icon} owi-5x`}></i>
            <p className="">{this.props.reading.weather[0].description}</p>
        </div>
    );
  }
}

export default Week;
