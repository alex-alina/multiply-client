import React, { PureComponent } from 'react';
import './SecondSignupSection.css';
import SignupFormContainer from '../form/SignupFormContainer';

class SecondSignupSection extends PureComponent {
  render() {
    return (
      <div className="second-signup-container">
        <h2 className="second-signup-title">Keep in touch</h2>
        <SignupFormContainer />
      </div>
    );
  }
}

export default SecondSignupSection;