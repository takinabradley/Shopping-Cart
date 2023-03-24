import "../component-styles/ProductBanner.scss"
import "./ProductBanner.scss"
import createBEM from "../scripts/BEMNames"

const BEM = createBEM("product-banner")
export default function ProductBanner({ children, modifiers }) {
  return <div className={`product-banner ${BEM.bm(modifiers)}`}>{children}</div>
}
