import createBEM from "@takinabradley/bem-names"
import React from "react"
import Block from "./Block"
import img3 from "../images/3.jpg"
import "../component-styles/CartProduct.scss"
const BEM = createBEM("cart-product")
export default function CartProduct({ item, modifiers, setItem, setQuantity }) {
  const { product, quantity } = item
  return (
    <Block BEM={BEM} modifiers={modifiers}>
      <div className={BEM.e("img-container")}>
        <img src={img3} alt={product.title} className={BEM.e("img")} />
      </div>
      <div className={BEM.e("product-info")}>
        <div className={BEM.e("title")}>{product.title}</div>
        <div className={BEM.e("price")}>{product.price}</div>
        <input
          type="number"
          name="quantity"
          className={BEM.e("quantity")}
          value={quantity}
          onChange={(e) => setItem(product, parseInt(e.target.value))}
        />
        {/* <div type="number" name="quantity" className={BEM.e("quantity")}>
          {quantity}
        </div> */}
      </div>
    </Block>
  )
}
