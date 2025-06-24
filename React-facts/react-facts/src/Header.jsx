import React from 'react';
import reactlogo from './assets/react.svg';
import './index.css'


export function Header() {
  return (
    <div>
      <header>
          <img src={reactlogo} alt="" />
          <nav>
            <ul className="nav-list">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
      </header>
    </div>      
  );
}

export default Header;