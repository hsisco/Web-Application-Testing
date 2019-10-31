import React from 'react';

export const Dashboard =(props) => {
  return (
    <div className="scoreButtons">
      <Button onClick={props.addStrike}>STRIKE</Button>
      <Button onClick={props.addBall}>BALL</Button>
      <Button onClick={props.addFoul}>FOUL</Button>
      <Button onClick={props.hit}>HIT</Button>
    </div>
  );
} 
          