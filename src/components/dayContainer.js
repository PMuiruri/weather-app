import React, { Component } from 'react';
import {Row, Card, Col, Button} from "react-bootstrap";

class DayContainer extends Component {

  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col md={6}>
            <Card>
            <Card.Header className="card-rose">
            </Card.Header>
            <Card.Body>
            </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}

export default DayContainer;
