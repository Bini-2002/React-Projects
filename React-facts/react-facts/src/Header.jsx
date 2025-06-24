import reactlogo from './assets/react.svg';
import './index.css';


export function Header() {
  return (
      <header className='header'>
          <img src={reactlogo} className='react-logo' alt="" />
          <nav>
            <ul className="nav-list">
              <li className='nav-list-item'>Pricing</li>
              <li className='nav-list-item'>About</li>
              <li className='nav-list-item'>Contact</li>
            </ul>
          </nav>
      </header>
  );
}

export default Header;