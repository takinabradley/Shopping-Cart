import React from "react"
import ToggleButton from "./ToggleButton"
import "../component-styles/SiteHeader.scss"
import createBEM from "../scripts/BEMNames"

const BEM = createBEM("site-header")
const modifyNavItem = BEM.m(BEM.e("nav-item"))
function SiteHeader({
  navItems,
  selected,
  handleItemClick,
  toggleCartOpen,
  numberOfCartItems
}) {
  const navItemElements = navItems.map((item) => {
    const isSelected = selected === item
    const className = `\
      ${BEM.e("nav-item")} ${modifyNavItem(isSelected ? "selected" : "")}\
    `

    return (
      <li className={className} onClick={handleItemClick} key={item}>
        {item}
      </li>
    )
  })

  return (
    <header className={BEM.b}>
      <div className={BEM.e("left")}>
        <div className={BEM.e("logo")}>PROCESSOR</div>
        <nav className={BEM.e("nav")}>
          <ul className={BEM.e("nav-list")}>{navItemElements}</ul>
        </nav>
      </div>
      <div className={BEM.e("right")}>
        <ToggleButton className={BEM.e("toggle-cart")} toggle={toggleCartOpen}>
          Open Cart! {numberOfCartItems ? `(${numberOfCartItems})` : null}
        </ToggleButton>
      </div>
    </header>
  )
}

export default SiteHeader
