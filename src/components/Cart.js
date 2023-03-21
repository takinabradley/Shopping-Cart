import React from 'react'
import ProductCard from './ProductCard'
export default function Cart({cart, removeFromCart, checkOut}) {
  
  
  return (
    <div>
      {Object.values(cart).map(product =>
        <div key={product.id}>
          {[product.name, ' ', product.quantity]}
          <button onClick={()=> removeFromCart(product)}>Remove</button>
        </div>)
      }
      <button onClick={checkOut}>Checkout</button>
    </div>
  )
}

