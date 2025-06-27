import claudelogo from '../images/chef-claude-icon.png'; 
import '../index.css'; 

export default function Header(){
  return(
    <header className='header'>
      <img src={claudelogo} alt="Chef Claude Logo" className='header-logo' />
      <h1 className='header-title'>Chef Claude</h1>
    </header>
  )
}