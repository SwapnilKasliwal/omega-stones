import React from 'react';
import MainCarousel from '../../MainCarousel'
import './Homepage.css'

export default function Homepage() {
  return (
    <div className='main'>
      <MainCarousel/>
      <div className='homepage-container'>
          <div className='homepage-content'>
          <h2>Our Infrastructure:</h2>
          <p>State of the art machinery is being used for processing of the product. Multi-cutter and LPM produced by well renowned brand “Shree Bhagwati”.
            Only exclusively skilled employees are hired to operate and process granite.
            Machinery combined with skilled employees let us produce the product with precision and quality required in exports and domestic both the markets.
          </p>      
        </div>
          <div className='homepage-content'>
          <h2>About Us:</h2>
          <p>
          <ul>
          <li>
          We at shree venkateshwara granites believe in 100% customer satisfaction.
          </li>
          <li>
          We are ambitious to grow and to achieve that we provide world class services and quality of our product.
          </li>
          <li>
          We manufacture a wide range of export quality product in different sizes and thickness.
          </li>
          <li>
          We also manufacture product based on customer specific as well as general market requirements.
          </li>
        </ul>
        </p>
          </div>
        </div>
      </div>
  )
}


