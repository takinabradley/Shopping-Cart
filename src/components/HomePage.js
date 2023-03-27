import createBEM from "@takinabradley/bem-names"
import "../component-styles/HomePage.scss"
import React from "react"
import Block from "./Block"
import Hero from "./Hero.js"
import img1 from "../images/1.jpg"
const BEM = createBEM("home")
export default function HomePage({ modifiers }) {
  return (
    <Block BEM={BEM} modifiers={modifiers}>
      <Hero
        image={img1}
        heading="Hero Banner"
        blurb={`\
This. Is. A. Hero. banner.
It's here to show off a cool product.
`}
        buttonText="Click. Here."
        modifiers="transparent-black-background"
      />
      <Hero
        image={img1}
        heading="Hero Banner"
        blurb="This. Is. Another. One. It's just here to fill some space"
        buttonText="Click. Here."
        modifiers="transparent-black-background"
      />
    </Block>
  )
}
