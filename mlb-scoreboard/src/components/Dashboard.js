import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';


export const Dashboard =(props) => {
  return (
    <div className="scoreButtons">
      <ButtonGroup size="lg">
        <Button onClick={props.addStrike}>STRIKE</Button>
        <Button onClick={props.addBall}>BALL</Button>
        <Button onClick={props.addFoul}>FOUL</Button>
        <Button onClick={props.hit}>HIT</Button>
      </ButtonGroup>
    </div>
  );
} 
          