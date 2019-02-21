import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="nav-container">
        <div className="logo-container">
          <h3 className="company-name">multiply</h3>
        </div>

        <ul className='nav-links'>
          <li className='nav-li'><Link className="link" to='/'>intro</Link></li> 
          <li className='nav-li'><Link className="link" to='/value-proposition'>how it helps</Link></li>
          <li className='nav-li'><Link className="link" to='/how-it-works'>how it works</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;