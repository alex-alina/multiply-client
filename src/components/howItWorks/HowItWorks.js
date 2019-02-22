import React, { PureComponent } from 'react';
import './HowItWorks.css';

class HowItWorks extends PureComponent {
  render() {
    return (
      <div>
        <div>
          <h2>How It Works</h2>
          <h4>Template Drawings</h4>

          <div className="steps">
            <div className="step">
              <div className="cicle-num">1</div>
              <p>Start with a drawing</p>
            </div>

            <div className="step">
              <div className="cicle-num">2</div>
              <p>Parametrize drawing</p>
              <p>position | size | rotation <br></br> color | control point</p>
            </div>

            <div className="step">
              <div className="cicle-num">3</div>
              <p>Generate new drawing <br></br> from template drawing</p>
            </div>
          </div>

          <div className="step-images">
            <div className="step-img">
              <img className="fit-img" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            </div>

            <div className="step-img">
              <img className="fit-img" src="https://images.unsplash.com/photo-1550684848-86a5d8727436?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
            </div>

            <div className="step-img">
              <img className="fit-img" src="https://images.unsplash.com/photo-1550684847-75bdda21cc95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;