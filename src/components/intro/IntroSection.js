import React, { PureComponent } from 'react';
import './IntroSection.css';
import SignupFormContainer from '../form/SignupFormContainer';

class IntroSection extends PureComponent {
  render() {
    return (
      <div id="home" className="intro-container">
        <div className="intro-text">
          <h1 className="main-title">multiply</h1>
          <h2 className="tag-line">Make a pattern from one drawing in two minutes.</h2>
          <SignupFormContainer />
        </div>
      </div>
    );
  }
}

export default IntroSection;