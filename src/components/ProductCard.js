import "../component-styles/ProductCard.scss"
import img2 from "../images/2.jpg"
import createBEM from "@takinabradley/bem-names"
import Block from "./Block"

const BEM = createBEM("product-card")
export default function ProductCard({ product, handleAddToCart, modifiers }) {
  return (
    <Block BEM={BEM} modifiers={modifiers} testid={BEM.b}>
      <div className={BEM.e("img-container")}>
        <img src={img2} alt={product.title} className={BEM.e("img")} />
      </div>
      <h2 className={BEM.e("title")}>{product.title}</h2>
      <p className={BEM.e("description")}>{product.description}</p>
      <div className={BEM.e("price")}>{product.price}</div>
      <button
        className={BEM.e("add-to-cart")}
        onClick={() => handleAddToCart(product)}
      >
        Add To Cart
      </button>
    </Block>
  )
}
