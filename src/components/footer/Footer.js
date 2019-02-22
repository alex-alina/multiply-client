import React, { PureComponent } from 'react';
import './Footer.css';

class Footer extends PureComponent {
  render() {
    return (
      <div>
        <small>{`Copyright \u00A9 2019 multiply`}</small>
      </div>
    );
  }
}

export default Footer;