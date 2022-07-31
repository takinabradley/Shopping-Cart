import React, { useState } from 'react'
export default function ProductCard({product}) {
  const [quantity, setQuantity] = useState(0)

  function onChangeQuantity(e) {
    setQuantity(e.target.value)
  }

  return (
    <div className='product-card' data-testid='productCard'>
      <div className="product-name">{product.name}</div>

      <img className="product-img" src={product.img} alt={product.name} />

      <input className='product-quantity' type="number" value={quantity} onChange={onChangeQuantity} />
      <div className="product-description">{product.description}</div>
      <div className="product-stock">{product.stock}</div>
    </div>
  )
}