import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainBackground from '../images/gallery/main_background.jpg'
import Gantry from '../images/gallery/Gantry.jpg'
import './pages/HomePage/Homepage.css'

export default function MainCarousel() {
   
const images = [{
    id: 1,
    src: MainBackground,
    alt: "Image 1"
},
{
    id: 2,
    src: Gantry,
    alt: "Image 2 "
},
];
const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <>
      <div className="imgslider carousel container">
        <Slider {...settings}>
          {images.map((item) => (
            <div className = "carousel-item" key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
          </>
  )
}
