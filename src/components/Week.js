import React, { Component } from 'react';
import {Row,  Col} from "react-bootstrap";

class Week extends Component {
  render() {
  console.log(this.props.reading);

    return (
      <div className="">
        <div className="card">
          <h3 className="card-title">date</h3>
            <p className="text-muted">time</p>
            <i>icon</i>
            <h4>{this.props.reading.temp}°C</h4>
            <div className="card-body">
            <p className="card-text">description</p>
          </div>
        </div>
    </div>
    );
  }
}

export default Week;
