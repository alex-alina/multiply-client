import React, { PureComponent } from 'react';
import './ValuePropSection.css';
import { FaRegCopy } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import { GiFairyWand } from "react-icons/gi";

class ValuePropSection extends PureComponent {
  render() {
    return (
      <div id="value-proposition" className="value-container">
        <h2 className="value-title">Value Proposition</h2>
        <ul className="value-list">
          <li className="li-value-item">
            <MdAccessTime className="li-icon" />
            <p>Save time on scenes with repetitive elements</p>
          </li>
          <li className="li-value-item">
            <FaRegCopy className="li-icon" />
            <p>Turn your designs into reusable templates</p>
          </li>
          <li className="li-value-item">
            <IoIosFlash className="li-icon" />
            <p>Quickly make variations of your work</p>
          </li>
          <li className="li-value-item">
            <GiFairyWand className="li-icon" />
            <p>Gain productivity superpowers by adding a powerful tool to your workflow</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ValuePropSection;