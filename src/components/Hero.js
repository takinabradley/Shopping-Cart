import React from "react"
import "../component-styles/Hero.scss"
import createBEM from "../scripts/BEMNames"
import Banner from "./Banner"

const BEM = createBEM("hero")
function Hero({ image, heading, blurb, buttonText, handleClick, modifiers }) {
  return (
    <Banner overrideName={BEM.b} modifiers={modifiers}>
      <div className={BEM.e("img-container")}>
        <img src={image} alt="featured product" className={BEM.e("img")} />
      </div>

      <div className={BEM.e("info")}>
        <h2 className={BEM.e("heading")}>{heading}</h2>
        <p className={BEM.e("blurb")}>{blurb}</p>
        <button className={BEM.e("learn-more")} onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </Banner>
  )
}

export default Hero
