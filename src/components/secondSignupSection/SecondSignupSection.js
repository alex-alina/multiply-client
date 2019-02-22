import React, { PureComponent } from 'react';
import './SecondSignupSection.css';
import SignupFormContainer from '../form/SignupFormContainer';

class SecondSignupSection extends PureComponent {
  render() {
    return (
      <div>
        <h2>Keep in touch</h2>
        <SignupFormContainer />
      </div>
    );
  }
}

export default SecondSignupSection;