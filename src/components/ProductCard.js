import React from 'react'
export default function ProductCard({product}) {
  
  return (
    <div className='product-card' data-testid='productCard'>
      <div className="product-name">{product.name}</div>

      <img className="product-img" src={product.img} alt={product.name} />

      <div className="product-description">{product.description}</div>
      <div className="product-stock">{product.stock}</div>
    </div>
  )
}