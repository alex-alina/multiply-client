import React, { PureComponent } from 'react';
import './FormValidationMessage.css';

class FormValidationMessage extends PureComponent {
  render() {
    return (
      <div style={{ color: this.props.color }} className="validation-message">
        <span>{this.props.message}</span>
      </div>
    );
  }
}

export default FormValidationMessage;