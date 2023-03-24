import "../component-styles/Card.scss"
import createBEM from "../scripts/BEMNames"

import React from "react"

const BEM = createBEM("card")
// using card with a name override allows me to abstract away the modification stuff
export default function Card({ children, modifiers, overrideName }) {
  if (overrideName) {
    const BEM = createBEM(overrideName)
    return <div className={`${BEM.b} ${BEM.bm(modifiers)}`}>{children}</div>
  }
  return <div className={`${BEM.b} ${BEM.bm(modifiers)}`}>{children}</div>
}

export { BEM as cardName }
