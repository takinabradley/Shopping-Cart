import ProductCard from "./ProductCard"
import "./ProductBanner.scss"
import createAddModifiers from "../scripts/createAddModifiers"

const addModifers = createAddModifiers("product-banner")
export default function ProductBanner({ children, modifiers }) {
  return (
    <div className={`product-banner ${addModifers(modifiers)}`}>{children}</div>
  )
}
