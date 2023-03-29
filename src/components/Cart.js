import createBEM from "@takinabradley/bem-names"
import React from "react"
import Block from "./Block"
import "../component-styles/Cart.scss"
import CartProduct from "./CartProduct"
const BEM = createBEM("cart")
export default function Cart({ cart, setCartItems, modifiers }) {
  const total = Object.values(cart).reduce((total, item) => {
    const quantity = item.quantity
    const price = item.product.price.slice(1) // remove dollar sign
    return total + price * quantity
  }, 0)
  return (
    <Block BEM={BEM} modifiers={modifiers} testid="cart">
      <div className={BEM.e("items")}>
        {Object.values(cart).map((item) => {
          return (
            <CartProduct
              item={item}
              key={item.product.id}
              setItem={setCartItems}
            />
          )
        })}
      </div>

      <div className={BEM.e("checkout-area")}>
        <div className={BEM.e("total")}>${total}</div>
        <button className={BEM.e("checkout")}>Checkout</button>
      </div>
    </Block>
  )
}
