import React, { PureComponent } from 'react';
import './FormValidation.css';

class FormValidation extends PureComponent {
  render() {
    return (
      <div className="validation-message">
        <span>Email registration successful.</span>
      </div>
    );
  }
}

export default FormValidation;