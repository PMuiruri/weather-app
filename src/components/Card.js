import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import Week from './Week.js';
import '../App.css';

class Card extends Component {
  render() {
    let weekCards =this.props.weekdata.map((reading, index) => <Week reading={reading} key={index} />);
    var data = (this.props);

    if(typeof(data) != 'undefined'){

    return (
      <div>
        <Row>
          <Col md={{span: 10, offset: 1}}>
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
          <Col md={{span: 10, offset: 1}} >
            <div className="">
              {weekCards}
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
