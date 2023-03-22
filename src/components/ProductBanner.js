import ProductCard from "./ProductCard"
import "./ProductBanner.scss"
import BEMNames from "../scripts/BEMNames"

const modifyBanner = BEMNames.makeBuildModifiersFromItem("product-banner")
export default function ProductBanner({ children, modifiers }) {
  return (
    <div className={`product-banner ${modifyBanner(modifiers)}`}>
      {children}
    </div>
  )
}
