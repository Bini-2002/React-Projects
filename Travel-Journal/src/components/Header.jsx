import React from 'react';
import headerlogo from '../images/globe.png'; // Adjust the path as necessary
import "../index.css";// Assuming you have a CSS file for styling

export default function Header() {
  return (
    <header className="header">
      <img src={headerlogo} alt="Travel Journal Logo" className="header-logo" />
      <h1 className="header-title">my travel journal.</h1>
    </header>
  )
}