import React from "react"
import "./SiteHeader.scss"
import BEMNames from "../scripts/BEMNames"

const modifyNavItem = BEMNames.makeBuildModifiersFromItem(
  "site-header__nav-item"
)
export default function SiteHeader({ navItems, selected, handleItemClick }) {
  const navItemElements = navItems.map((item) => {
    const isSelected = selected === item
    const className = `
      site-header__nav-item
      ${modifyNavItem(isSelected ? "selected" : "")}
    `

    return (
      <li className={className} onClick={handleItemClick} key={item}>
        {item}
      </li>
    )
  })

  return (
    <header className="site-header">
      <div className="site-header__logo">PROCESSOR</div>
      <nav className="site-header__nav">
        <ul className="site-header__nav-list">{navItemElements}</ul>
      </nav>
    </header>
  )
}
