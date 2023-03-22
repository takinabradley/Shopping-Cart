import React, { useEffect, useState } from "react"
import Hero from "./Hero"
import img1 from "../images/1.jpg"
import "./ShopPage.scss"
import toTriplets from "../scripts/toTriplets"
import getMockData from "../scripts/getMockData"
import ProductBanner from "./ProductBanner"
import ProductCard from "./ProductCard"

const toProductBanners = (banners, products) => {
  const banner = (
    <ProductBanner modifiers="--transparent-background">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          modifiers="--transparent-50"
        />
      ))}
    </ProductBanner>
  )
  return [...banners, banner]
}

export default function ShopPage() {
  const [productTriplets, setProductTriplets] = useState([])

  const productBanners = productTriplets.length
    ? productTriplets.reduce(toProductBanners, [])
    : null

  useEffect(() => {
    const getData = async () => {
      const data = await getMockData(6)
      const triplets = data.reduce(toTriplets, [])
      setProductTriplets(triplets)
    }
    getData()
  }, [])

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
        modifiers="--transparent-background"
      />

      {productBanners}
    </div>
  )
}
