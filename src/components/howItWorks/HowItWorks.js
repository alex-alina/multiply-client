import React, { PureComponent } from 'react';
import './HowItWorks.css';

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
                <img className="fit-img" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
              </div>
            </div>

            <div className="step">
              <div className="step-description">
                <div className="num">2</div>
                <p className="description">Parametrize drawing</p>
                <span className="drawing-parameters">position | size | rotation <br></br> color | control point</span>
              </div>

              <div className="step-img">
                <img className="fit-img" src="https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
              </div>
            </div>

            <div className="step">
              <div className="step-description">
                <div className="num">3</div>
                <p className="description">Generate new drawing <br></br> from template drawing</p>
              </div>

              <div className="step-img">
                <img className="fit-img" src="https://images.unsplash.com/photo-1550684847-75bdda21cc95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;