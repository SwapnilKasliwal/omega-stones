import React from 'react'
import "./Product.css"
export default function Product({id, name, src, color}) {
  return (
    <a href={src} data-lightbox="Granites">
    <div className="product">
      <img className="product-image" src={src} alt="product"/>
      <p className='product-name'>{name!==''?name:color+' Granite'}</p>
  </div>
  </a>
  )
}
