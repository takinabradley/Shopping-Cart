import React from "react"
import ToggleButton from "./ToggleButton"
import "../component-styles/SiteHeader.scss"
import createBEM from "@takinabradley/bem-names"
import Block from "./Block"

const BEM = createBEM("site-header")
function SiteHeader({
  navItems,
  selected,
  handleItemClick,
  toggleCartOpen,
  isCartOpen,
  numberOfCartItems,
  modifiers
}) {
  const navItemElements = navItems.map((item) => {
    const isSelected = selected === item
    const className = `
      ${BEM.e("nav-item")} ${isSelected ? BEM.e("nav-item", "selected") : ""}
    `

    return (
      <li className={className} onClick={handleItemClick} key={item}>
        {item}
      </li>
    )
  })

  return (
    <Block BEM={BEM} modifiers={modifiers} type="header" testid={BEM.b}>
      <div className={BEM.e("left")}>
        <div className={BEM.e("logo")}>PROCESSOR</div>
        <nav className={BEM.e("nav")}>
          <ul className={BEM.e("nav-list")}>{navItemElements}</ul>
        </nav>
      </div>
      <div className={BEM.e("right")}>
        <ToggleButton className={BEM.e("toggle-cart")} toggle={toggleCartOpen}>
          {isCartOpen ? "Close Cart!" : "Open Cart!"}{" "}
          {numberOfCartItems ? `(${numberOfCartItems})` : null}
        </ToggleButton>
      </div>
    </Block>
  )
}

export default SiteHeader
