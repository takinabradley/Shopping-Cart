import "../component-styles/Banner.scss"
import createBEM from "@takinabradley/bem-names"
const BEM = createBEM("banner")
export default function Banner({ children, modifiers, overrideName }) {
  if (overrideName) {
    const BEM = createBEM(overrideName)
    return <div className={`${BEM.b} ${BEM.bm(modifiers)}`}>{children}</div>
  }
  return <div className={`${BEM.b} ${BEM.bm(modifiers)}`}>{children}</div>
}

function ShopBanner({ children, modifiers }) {
  return (
    // FixMe related to BEMNames:
    // adding default extended modifiers is a bit weird. Maybe an array would be
    // better
    <Banner
      modifiers={`shop-banner transparent-black-background${
        modifiers ? modifiers.padStart(1) : ""
      }`}
    >
      {children}
    </Banner>
  )
}

export { ShopBanner }
