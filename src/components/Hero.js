import React from "react"
import "./Hero.scss"
import createAddModifiers from "../scripts/createAddModifiers"

const addModifers = createAddModifiers("hero")
function Hero({ image, heading, blurb, buttonText, handleClick, modifiers }) {
  return (
    <div className={`hero ${addModifers(modifiers)}`}>
      <div className="hero__img-container">
        <img src={image} alt="featured product" className="hero__img" />
      </div>

      <div className="hero__info">
        <h2 className="hero__heading">{heading}</h2>
        <p className="hero__blurb">{blurb}</p>
        <button className="hero__learn-more" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default Hero
