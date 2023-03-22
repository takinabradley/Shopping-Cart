import React from "react"
import Hero from "./Hero"
import img1 from "../images/1.jpg"
import "./ShopPage.scss"
export default function ShopPage() {
  return (
    <div className="shop-page">
      <Hero
        image={img1}
        heading="Lorem ipsum dolor sit amet."
        blurb={`\
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem\
          laboriosam voluptate, mollitia repellendus corrupti rerum!\
        `}
        buttonText="Learn More!"
        handleClick={() => console.log("hello")}
        /* modifier={"hero--big-text"} */
      />
    </div>
  )
}
