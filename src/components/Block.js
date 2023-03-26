import React from "react"
export default function Block({ BEM, modifiers, children, type = "div" }) {
  const className = `${BEM.b} ${modifiers ? BEM.bm(modifiers) : ""}`

  switch (type) {
    case "header":
      return <header className={className}>{children}</header>
    default:
      return <div className={className}>{children}</div>
  }
}
