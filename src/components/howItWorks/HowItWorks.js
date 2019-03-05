import React, { PureComponent } from 'react';
import './HowItWorks.css';
import step1 from '../../images/step1.svg';
import step2 from '../../images/step2.svg';
import step3 from '../../images/step3.svg';

class HowItWorks extends PureComponent {
  render() {
    return (
      <div id="how-it-works" className="hiw-container">
        <div>
          <h2 className="hiw-title">Template Drawings: How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-description">
                <div className="num">1</div>
                <p className="description">Start with a drawing</p>
              </div>

              <div className="step-img">
                <img id="step1" className="fit-img" src={step1} alt="Green leaf vector" />
              </div>
            </div>

            <div className="step">
              <div className="step-description">
                <div className="num">2</div>
                <p className="description">Parametrize drawing</p>
                <span className="drawing-parameters">position | size | rotation <br></br> color | control point</span>
              </div>

              <div className="step-img">
                <img id="step2" className="fit-img" src={step2} alt="" />
              </div>
            </div>

            <div className="step">
              <div className="step-description">
                <div className="num">3</div>
                <p className="description">Generate new drawing <br></br> from template drawing</p>
              </div>

              <div className="step-img">
                <img className="fit-img" src={step3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;