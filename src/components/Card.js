import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import '../App.css';

class Card extends Component {
  render() {
    var data = (this.props);

    if(typeof(data) != 'undefined'){

    return (
      <div>
        <Row>
          <Col md={{span: 8, offset: 2}}>
            <div className=" card weather-card">
              <div className="top">
                <div className="wrapper">
                  <h1 className="heading">{this.props.name}</h1>
                  <h3 className="location">{this.props.description}</h3>
                  <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="weather-icon" className="img-responsive"/>
                  <p className="temp">
                    <span className="temp-value">{this.props.temp} </span>
                    <span className="temp-value">&deg;C</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  } else{
    return <div>...is Loading</div>
  }
}
}

export default Card;
