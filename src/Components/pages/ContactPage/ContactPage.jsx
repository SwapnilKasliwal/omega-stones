import React from 'react'
import SimpleMap from '../../SimpleMap'
import './ContactPage.css'
import facebookLogo from '../../../images/logos/facebook_logo.png'
import whatsappLogo from '../../../images/logos/whatsapp_logo.avif'
import instagramLogo from '../../../images/logos/instagram_logo.png'
import linkedinLogo from '../../../images/logos/linkedin_logo.jpg'

export default function ContactPage() {
  return (
    <>
    <div className='container'>
      <SimpleMap></SimpleMap>
    </div>
    <div className='contact-container'>
    <div className='info-container'>
    <h2>GET IN TOUCH</h2>
    <p>Harmara Rd, RICCO Industrial Area, Kishangarh, Rajasthan 305801</p>
    <ul>
      <li>+91 9829073691</li>
      <li>+91 9929973691</li>
      <li>+91 9829047691</li>
    </ul>
    <div className='icon-container'>
      <a href=''><div className='outer'><div className='logo-labels'>Contact us on whatsapp</div><img className='logo-icon' src={whatsappLogo}></img></div></a>
      <a href=''><div className='outer'><div className='logo-labels'>Follow us on facebook</div><img className='logo-icon' src={facebookLogo}></img></div></a>
      <a href=''><div className='outer'><div className='logo-labels'>Follow us on instagram</div><img className='logo-icon' src={instagramLogo}></img></div></a>
      <a href=''><div className='outer'><div className='logo-labels'>Connect with us on linkedin</div><img className='logo-icon' src={linkedinLogo}></img></div></a>
    </div>
    </div>
    <div className='form-container'>
    <h2>EMAIL US</h2>
    <form action="mailto:omegastones@gmail.com">
  <input className="contact-input" type='text' name='name' placeholder='Your Name (required)' required={true}></input>
  <input className="contact-input" type='text' name='email' placeholder='Your Email (required)'></input>
  <input className="contact-input" type='text' name='message' id='message' placeholder='Your Message (required)'></input>
  
</form>
    </div>
    </div>
    </>
  )
}
