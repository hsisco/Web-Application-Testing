import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Dashboard } from './Dashboard';

export const addOne = (currNum) => {
  return currNum + 1;
}

export class Display extends React.Component {
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      fouls: 0
    }
  };

  addStrike = () => {
    const stateStrikes = this.state.strikes;
    if (stateStrikes < 2) {
      this.setState(() => {
        return {strikes: addOne(stateStrikes)}
      })
    } else {
      this.setState(() => {
        return {strikes: 0, balls: 0}
      })
    }
  };

  addBall =() => {
    const stateBalls = this.state.balls;
    if (stateBalls < 3) {
      this.setState(() => {
        return {balls: addOne(stateBalls)}
      })
    } else {
      this.setState(() => {
        return {strikes: 0, balls: 0}
      })
    }
  };

  addFoul = () => {
    const stateFouls = this.state.fouls;
    this.setState(() => {
      return {fouls: addOne(stateFouls)}
    })
  };

  hit = () => {
    this.setState({strikes: 0, balls: 0, fouls: 0})
  }

  render(){
    return(
      <div className="Display">
        <Container>
          <Row>
          <Col sm="5" />
          <Col sm="5">
            <h3>STRIKE</h3>
            <h1>{this.state.strikes}</h1>
            </Col>
          <Col sm="5">
            <h3>BALL</h3>
            <h1>{this.state.balls}</h1>
          </Col>
          <Col sm="5">
            <h3>FOUL</h3>
            <h1>{this.state.fouls}</h1>
          </Col>
          <Col sm="5" />
          </Row>
          <Dashboard 
            addStrike={this.addStrike}
            addBall={this.addBall}
            addFoul={this.addFoul}
            hit={this.hit}
          />
        </Container>
      </div>
    );
  }
}