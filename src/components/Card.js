import React, { Component } from 'react';
import {Row, Col} from "react-bootstrap";
import Form from './Form.js';
import Week from './Week.js';
import Chart from './weatherChart.js';
import WeatherCard from './weatherCard.js';
import MiniCard from './miniCard';
import '../App.css';

class Card extends Component {
  render() {
    let weekCards = this.props.weekdata.map((reading, index) => <Week reading={reading} key={index} />);

    var data = (this.props);
    if(typeof(data) != 'undefined'){
    return (
      <div>
        <Row>
          <Col md={{span: 12}} style={{ padding: 0, margin: 0 }}>
            <Form handleSubmit={this.props.handleSubmit} handleChange={this.props.handleChange}/>
          </Col>
          <Col md={{span: 10}} style={{ padding: 0, margin: 0 }}>
            <div className="">{weekCards}</div>
            <WeatherCard {...this.props}/>
            <Chart fulldata={this.props.fulldata} {...weekCards}/>
          </Col>
          <Col md={{span: 2}} style={{ padding: 0, margin: 0 }}>
            <MiniCard name={'Pressure'} reading={this.props.pressure} icon={'fas fa-wind'}/>
            <MiniCard name={'Humidity'} reading={this.props.humidity} icon={'fas fa-tint'}/>
            <MiniCard name={'Temperature Max'} reading={this.props.temp_max} icon={'fas fa-temperature-high'}/>
            <MiniCard name={'Temperature Min'} reading={this.props.temp_min} icon={'fas fa-temperature-low'} />
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
