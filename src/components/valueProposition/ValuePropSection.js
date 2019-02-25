import React, { PureComponent } from 'react';
import './ValuePropSection.css';
import { FaCheckCircle } from "react-icons/fa";

class ValuePropSection extends PureComponent {
  render() {
    return (
      <div className="values-container">
        <h2>Value Proposition</h2>
        <ul className="values-list">
          <li className="li-value-item">
            <FaCheckCircle />
            <p>Save time on scenes with repetitive elements</p>
          </li>
          <li className="li-value-item">
            <FaCheckCircle />
            <p>Turn your designs into reusable templates</p>
          </li>
          <li className="li-value-item">
            <FaCheckCircle />
            <p>Quickly make variations of your work</p>
          </li>
          <li className="li-value-item">
            <FaCheckCircle />
            <p>Gain productivity superpowers by adding a powerful tool to your workflow</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ValuePropSection;