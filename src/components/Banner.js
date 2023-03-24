import "../component-styles/Banner.scss"
import createBEM from "../scripts/BEMNames"

const BEM = createBEM("banner")
export default function Banner({ children, modifiers }) {
  return <div className={`${BEM.b} ${BEM.bm(modifiers)}`}>{children}</div>
}

function ShopBanner({ children, modifiers }) {
  return (
    <Banner
      modifiers={`shop-banner transparent-black-background ${modifiers || ""}`}
    >
      {children}
    </Banner>
  )
}

export { ShopBanner }
