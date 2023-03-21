import React from "react"
import style from "./Header.module.css"
export default function SiteHeader({ selected, handleLinkClick }) {
  return (
    <header className={style.siteHeader}>
      <nav className={style.siteNav}>
        <ul className={style.siteNavLinks}>
          <li
            className={selected === "Home" ? style.selected : null}
            onClick={handleLinkClick}
          >
            Home
          </li>
          <li
            className={selected === "Shop" ? style.selected : null}
            onClick={handleLinkClick}
          >
            Shop
          </li>
        </ul>
      </nav>
    </header>
  )
}
