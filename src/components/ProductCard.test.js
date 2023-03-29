import React from "react"
import { getByText, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import ProductCard from "./ProductCard"

const product1 = {
  title: "product1",
  description: "A product descriptoin",
  price: "$100"
}

it("doesn't work without product", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})

  expect(() => render(<ProductCard />)).toThrow()
})

it("works with product", () => {
  expect(() => render(<ProductCard product={product1} />)).not.toThrow()
  const productCard = screen.getByTestId("product-card")
  expect(productCard).toBeInTheDocument()
})

it("has class name of product-card", () => {
  render(<ProductCard product={product1} />)
  const productCard = screen.getByTestId("product-card")
  expect(productCard).toHaveClass("product-card")
})

it("accepts class modifiers", () => {
  render(<ProductCard product={product1} modifiers="cool boring" />)
  const productCard = screen.getByTestId("product-card")
  expect(productCard).toHaveClass(
    "product-card product-card--cool product-card--boring"
  )
})

it("shows image", () => {
  const baseURL = "http://localhost/"
  render(<ProductCard product={product1} />)

  const img = screen.getByAltText(product1.title)
  expect(img).toBeInTheDocument()
})

it("shows description", () => {
  render(<ProductCard product={product1} />)
  const description = screen.getByText("product1")
  expect(description).toBeInTheDocument()
})

it("show price", () => {
  render(<ProductCard product={product1} />)
  const price = screen.getByText("$100")
  expect(price).toBeInTheDocument()
})

it("has an add to cart button", () => {
  render(<ProductCard product={product1} />)
  const button = screen.getByText("Add To Cart")
  expect(button).toBeInTheDocument()
})

it("calls handleAddToCard when button is clicked", async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  render(<ProductCard product={product1} handleAddToCart={handleClick} />)

  const button = screen.getByText("Add To Cart")
  await user.click(button)
  expect(handleClick).toHaveBeenCalled()
})

it("calls handleAddToCard with the product as an argument", async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  render(<ProductCard product={product1} handleAddToCart={handleClick} />)

  const button = screen.getByText("Add To Cart")
  await user.click(button)
  expect(handleClick).toHaveBeenCalledWith(product1)
})
