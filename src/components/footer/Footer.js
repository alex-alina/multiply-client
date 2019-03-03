import React, { PureComponent } from 'react';
import './Footer.css';

const year = new Date().getFullYear();

class Footer extends PureComponent {

  render() {
    return (
      <div className="footer-container">
        <small>{`Copyright \u00A9 ${year} multiply`}</small>
      </div>
    );
  }
}

export default Footer;