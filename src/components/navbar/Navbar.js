import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <div className="logo-container">
          {/* add logo img */}
        </div>

        <ul className='nav-links'>
          <li className='nav-link'><Link to='/'>intro</Link></li> 
          <li className='nav-link'><Link to='/value-proposition'>how it helps</Link></li>
          <li className='nav-link'><Link to='/how-it-works'>how it works</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;