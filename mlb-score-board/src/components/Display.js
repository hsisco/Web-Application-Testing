import React from 'react';
// import Dashboard from './Dashboard';

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
        return {strikes: stateStrikes + 1}
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
        return {balls: stateBalls + 1}
      })
    } else {
      this.setState(() => {
        return {strikes: 0, balls: 0}
      })
    }
  };






}