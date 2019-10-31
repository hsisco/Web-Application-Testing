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
        return {strikes: strikeNum(stateStrikes)}
      })
    } else {
      this.setState(() => {
        return {strikes: 0, balls: 0}
      })
    }
  };

  
}