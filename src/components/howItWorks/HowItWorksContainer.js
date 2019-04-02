import React, { PureComponent } from 'react';
import step1 from '../../images/step1.svg';
import step2 from '../../images/step2.svg';
import step3 from '../../images/step3.svg';
import './HowItWorksContainer.css';
import HowItWorks from './HowItWorks';
import { howItWorksText } from './HowItWorksText';
import { addProperty } from '../../helpers/addProperty';

const textWithoutImgs = howItWorksText;
const imagesSrcList = [step1, step2, step3];
const textWithImgSrc = addProperty(textWithoutImgs, imagesSrcList);

class HowItWorksContainer extends PureComponent {
  render() {
    return (
      <div id="how-it-works" className="hiw-container">
        <div>
          <h2 className="hiw-title">Template Drawings: How It Works</h2>
          <div className="steps">
            {textWithImgSrc.map((step, index)=> {
              return <HowItWorks
                key={index}
                stepNum={step.stepNum}
                stepDescription={step.stepDescription}
                imgId={step.imgId}
                stepImg={step.imgSrc}
                imgDescription={step.imgDescription}
              />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorksContainer;