import createBEM from "@takinabradley/bem-names"
import React from "react"
import Block from "./Block"

const BEM = createBEM("home")
export default function HomePage({ modifiers }) {
  return (
    <Block BEM={BEM} modifiers={modifiers}>
      <h1 className={BEM.e("heading")}>I'm the home page!</h1>
    </Block>
  )
}
