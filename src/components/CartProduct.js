import createBEM from "@takinabradley/bem-names"
import React, { useEffect, useRef, useState } from "react"
import Block from "./Block"
import img3 from "../images/3.jpg"
import "../component-styles/CartProduct.scss"
const BEM = createBEM("cart-product")
export default function CartProduct({ item, modifiers, setItem, setQuantity }) {
  const { product, quantity } = item

  const [inputQuantity, setInputQuantity] = useState(quantity)
  const quantityInput = useRef()
  useEffect(() => {
    setInputQuantity(item.quantity)
  }, [item.quantity])

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
          value={inputQuantity}
          ref={quantityInput}
          onInput={(e) => {
            setInputQuantity(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") setItem(product, parseInt(inputQuantity))
          }}
          onClick={() => quantityInput.current.focus()}
          onBlur={() => setItem(product, parseInt(inputQuantity))}
        />
      </div>
    </Block>
  )
}
