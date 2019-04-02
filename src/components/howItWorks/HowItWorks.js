import React from 'react';
import './HowItWorks.css';

function HowItWorks(props) {
  return (
    <div className="step">
      <div className="step-description">
        <div className="num">{props.stepNum}</div>
        <p className="description">{props.stepDescription}</p>
      </div>
      <div className="step-img">
        <img id={props.imgId} className="fit-img" src={props.stepImg} alt={props.imgDescription} />
      </div>
    </div>
  );
}

export default HowItWorks;