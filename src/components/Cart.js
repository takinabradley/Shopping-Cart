import React from "react"

export default function Cart({ cart }) {
  return (
    <div>
      {Object.values(cart).map((item) => {
        return (
          <div key={item.product.id}>
            {item.product.title} {item.quantity}
          </div>
        )
      })}
    </div>
  )
}
