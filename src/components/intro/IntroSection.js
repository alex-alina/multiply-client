import React, { PureComponent } from 'react';
import './IntroSection.css';
import SignupFormContainer from '../form/SignupFormContainer';

class IntroSection extends PureComponent {
  render() {
    return (
      <div>
        <h1>multiply</h1>
        <h2>Make a pattern from one drawing in two minutes.</h2>
        <SignupFormContainer />
      </div>
    );
  }
}

export default IntroSection;