import React from 'react'
export default function ProductCard({product}) {

  return (
    <div className='product-card' data-testid='productCard'>
      {product.name}
    </div>
  )
}