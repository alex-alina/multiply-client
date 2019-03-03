import React, { PureComponent } from 'react';
import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <h3 className="company-name">multiply</h3>
        </div>
        <ul className='show-nav-links'>
          <li className='nav-li'><Link className="link" to='#home'>Home</Link></li>
          <li className='nav-li'><Link className="link" to='#value-proposition'>Value proposition</Link></li>
          <li className='nav-li'><Link className="link" to='#how-it-works'>How it works</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;