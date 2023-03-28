import React from "react"
export default function Block({
  BEM,
  modifiers,
  children,
  type = "div",
  testid
}) {
  const className = `${BEM.b} ${modifiers ? BEM.bm(modifiers) : ""}`
  const testidAttribute = testid ? { "data-testid": testid } : {}
  switch (type) {
    case "header":
      return (
        <header className={className} {...testidAttribute}>
          {children}
        </header>
      )
    default:
      return (
        <div className={className} {...testidAttribute}>
          {children}
        </div>
      )
  }
}
