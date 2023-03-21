import React from "react"
import "./SiteHeader.scss"

export default function SiteHeader({ navItems, selected, handleItemClick }) {
  const navItemElements = navItems.map((item) => {
    const isSelected = selected === item
    const className = `
      site-header__nav-item 
      ${isSelected ? "site-header__nav-item--selected" : ""}
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
