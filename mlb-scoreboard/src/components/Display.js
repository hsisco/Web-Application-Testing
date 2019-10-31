import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Dashboard } from './Dashboard';


export const plusStrike = (currStrikes) => {
  return currStrikes + 1;
}
export const plusBall = (currBall) => {
  return currBall + 1;
}


export class Display extends React.Component {
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0
    }
  };

  addStrike = () => {
    const stateStrikes = this.state.strikes;
    if (stateStrikes < 2) {
      this.setState(() => {
        return {strikes: plusStrike(stateStrikes)}
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
        return {balls: plusBall(stateBalls)}
      })
    } else {
      this.setState(() => {
        return {strikes: 0, balls: 0}
      })
    }
  };

  addFoul = () => {
    const stateStrikes = this.state.strikes;
    if (stateStrikes < 2) {
      this.setState(() => {
        return {strikes: plusStrike(stateStrikes)}
      })
    } else {
      this.setState(() => {
        return {strikes: stateStrikes}
      })
    }
  };

  hit = () => {
    this.setState({strikes: 0, balls: 0})
  }

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