import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Dashboard } from './Dashboard';


export class Display extends React.Component {
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0
    }
  };

  render(){
    return(
      <div className="Display">
        <Container>
          <Row>
          <Col sm="4" />
          <Col sm="4">
            <h3>STRIKE</h3>
            <h1>{this.state.strikes}</h1>
            </Col>
          <Col sm="4">
            <h3>BALL</h3>
            <h1>{this.state.balls}</h1>
          </Col>
          <Col sm="4" />
          </Row>
        </Container>
      </div>
    );
  }
}