import React, { useState } from "react"
import SteppableInput from "./SteppableInput"
export default function ProductCard({ product, addToCart}) {
  let maxStock = product.stock
  const [state, setState] = useState({
    stock: maxStock,
    quantity: 0,
    quantityInCart: 0
  })

  function onChangeQuantity(currentQuantity) {
    if (isNaN(currentQuantity) || currentQuantity <= 0) {
      setState(() => ({ stock: maxStock, quantity: 0}))
    } else if (currentQuantity >= maxStock) {
      setState(() => ({ stock: 0, quantity: maxStock }))
    } else {
      setState({ stock: maxStock - currentQuantity, quantity: currentQuantity })
    } 
  }

  function onAddToCart() {
    if(!state.quantity) return
    addToCart({ ...product, quantity: state.quantity })
  }

  return (
    <div className="product-card" data-testid="productCard">
      <div className="product-name">{product.name}</div>

      <img className="product-img" src={product.img} alt={product.name} />

      <SteppableInput value={state.quantity} onChange={onChangeQuantity} />

      <div className="product-description">{product.description}</div>
      <div className="product-stock">{state.stock}</div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  )
}
