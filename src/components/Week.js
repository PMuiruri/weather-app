import React, { Component } from 'react';
import {Row,  Col} from "react-bootstrap";

class Week extends Component {
  render() {
  console.log(this.props.reading);
    return (
        <div className="week-card">
          <div className="float-left">
            <p>Date</p>
            <p><i></i>icon</p>
          </div>
          <div className="float-right">
            <p>{this.props.reading.main.temp}°C</p>
            <p className="float-left">description</p>
          </div>
        </div>
    );
  }
}

export default Week;
