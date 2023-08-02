import React, { useState } from 'react'
import CompanyLogo from '../../images/logos/omega_logo.png';
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  const [NavBarState, setNavBarState] = useState('');
  const handleMenuFunction = ()=>{
    NavBarState===''?setNavBarState(' active'):setNavBarState('');
  }
  return (
    <div className="width-container">
      <nav id='navbar'>
            <Link to="/">
            <div className="container">
                <img id="company-logo" src={CompanyLogo} alt="Omega Logo"/>
                <div id="company-name">OMEGA STONES Pvt. Ltd.</div>
            </div>
        </Link>
            <ul id="nav-items" className={`${NavBarState}`}>
                <li><Link to="/" className="navLinks" onClick={handleMenuFunction}>Home</Link></li>
                <li><Link to="/granite" className="navLinks" onClick={handleMenuFunction}>Granite</Link></li>
                <li><Link to="/gallery" className="navLinks" onClick={handleMenuFunction}>Gallery</Link></li>
                <li><Link to="/about" className="navLinks" onClick={handleMenuFunction}>About</Link></li>
                <li><Link to="/contact" className="navLinks" onClick={handleMenuFunction}>Contact</Link></li>
            </ul>
            <button id="menuButton" onClick={handleMenuFunction}>
                <i className="fa fa-bars" id="menu"></i>
            </button>    
            </nav>
        </div>

  )
}
