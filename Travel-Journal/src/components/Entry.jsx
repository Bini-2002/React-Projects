import React from 'react';
import headerlogo from '../images/marker.png'; // Adjust the path as necessary
import '../index.css'; // Assuming you have a CSS file for styling


export default function Entry() {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji" className="entry-image" />
      </div>
      <div className="entry-details">
        <div className="entry-location">
          <img src={headerlogo} alt="Location Icon" className="location-icon" />
          <span className="entry-country">Japan</span>
          <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9" target="_blank" rel="noopener noreferrer" className="entry-map-link">View on Google Maps</a>
        </div>
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="entry-dates">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
      </div>

    </article>

  )
}