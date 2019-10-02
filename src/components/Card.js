import React, { Component } from 'react';
import {Row, Card, Col, Button} from "react-bootstrap";

class Tile extends Component {
  render() {
    var data = (this.props);

    if(typeof(data) != 'undefined'){

    return (
      <div>
        <Row>
          <Col md={{span: 6, offset: 3}}>
            <div class=" card weather-card">
              <div class="top">
                <div class="wrapper">
                  <h1 class="heading">{this.props.name}</h1>
                  <h3 class="location">{this.props.description}</h3>
                  <img src={`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`} alt="weather-icon" className="img-responsive"/>
                  <p class="temp">
                    <span class="temp-value">{this.props.temp} </span>
                    <span class="temp-value">&deg;C</span>
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

export default Tile;
