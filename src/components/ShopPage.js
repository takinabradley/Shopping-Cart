import React from "react"
import Hero from "./Hero"
import img1 from "../images/1.jpg"
import style from "./ShopPage.scss"
export default function ShopPage() {
  return (
    <div className="shop-page">
      <Hero
        image={img1}
        heading="Our Product Is The Best Darn Product. Try it out. I mean it. Please."
        blurb={"Just look at our product!"}
        className={"hero--shop-page"}
      />
    </div>
  )
}
