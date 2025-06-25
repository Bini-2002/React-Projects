import headerlogo from '../images/marker.png'; // Adjust the path as necessary
import '../index.css'; // Assuming you have a CSS file for styling

export default function Entry(props) {
  return (
    <article className="entry">
      <div className="entry-image-container">
        <img src={props.img} alt="Mount Fuji" className="entry-image" />
      </div>
      <div className="entry-details">
        <div className="entry-location">
          <img src={headerlogo} alt="Location Icon" className="location-icon" />
          <span className="entry-country">{props.country}</span>
          <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer" className="entry-map-link">View on Google Maps</a>
        </div>
        <h2 className="entry-title">{props.title}</h2>
        <p className="entry-dates">{props.dates}</p>
        <p className="entry-text">{props.text}</p>
      </div>

    </article>

  )
}