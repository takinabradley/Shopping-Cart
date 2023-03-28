import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import img1 from "../images/1.jpg"
import "../component-styles/ShopPage.scss"
import toTriplets from "../scripts/toTriplets"
import getMockData from "../scripts/getMockData"
import ProductCard from "./ProductCard"
import createBEM from "@takinabradley/bem-names"
import Block from "./Block"

const BEM = createBEM("shop-page")
export default function ShopPage({ handleAddToCart, modifiers }) {
  const [productTriplets, setProductTriplets] = useState([])

  const toProductBanners = (banners, products, index) => {
    const banner = (
      <div className={BEM.e("banner")} key={index}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            modifiers="transparent-50"
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    )

    return [...banners, banner]
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getMockData(8)
      const triplets = data.reduce(toTriplets, [])
      setProductTriplets(triplets)
    }
    getData()
  }, [])

  const productBanners = productTriplets.length
    ? productTriplets.reduce(toProductBanners, [])
    : null

  return (
    <Block BEM={BEM} modifiers={modifiers} testid={BEM.b}>
      <Hero
        image={img1}
        heading="Lorem ipsum dolor sit amet."
        blurb={`\
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem\
          laboriosam voluptate, mollitia repellendus corrupti rerum!\
        `}
        buttonText="Learn More!"
        handleClick={() => console.log("hello")}
        modifiers="transparent-black-background"
      />

      <div className={BEM.e("banners")}></div>
      {productBanners}
    </Block>
  )
}
