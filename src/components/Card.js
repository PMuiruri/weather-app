import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import Form from './Form.js';
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
          <Col md={{span: 8, offset: 2}}>
            <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
          </Col>
          <Col md={{span: 8, offset: 2}}>
            <div className=" card weather-card">
              <div className="top">
                <div className="wrapper">
                <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="weather-icon" className="img-responsive float-right"/>
                  <h1 className="heading font-weight-bold">{this.props.name}</h1>
                  <h3 className="location">{this.props.description}</h3>
                  <p className="temp font-weight-bold">
                    <span className="temp-value">{Math.round(this.props.temp)} </span>
                    <span className="temp-value"> &deg;C</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={{span: 8, offset: 2}} >
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
