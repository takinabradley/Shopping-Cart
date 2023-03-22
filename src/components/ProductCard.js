import "./ProductCard.scss"
import img2 from "../images/2.jpg"
import BEMNames from "../scripts/BEMNames"

const modifyCard = BEMNames.makeBuildModifiersFromItem("product-card")
export default function ProductCard({ product, modifiers }) {
  return (
    <div key={product.id} className={`product-card ${modifyCard(modifiers)}`}>
      <h2 className="product-card__title">{product.title}</h2>
      <div className="product-card__img-container">
        <img src={img2} alt="" className="product-card__img" />
      </div>
      <p className="product-card__description">{product.description}</p>
      <div className="product-card__price">{product.price}</div>
      <button className="product-card__add-to-cart">Add To Cart</button>
    </div>
  )
}
