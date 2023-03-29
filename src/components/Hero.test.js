import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import Hero from "./Hero"
import img from "../images/1.jpg"

it("renders", () => {
  expect(() => render(<Hero />)).not.toThrow()
  const hero = screen.getByTestId("hero")
  expect(hero).toBeInTheDocument()
})

it("shows image", () => {
  const baseUrl = "http://localhost/"
  render(<Hero image={img} />)
  const hero = screen.getByTestId("hero")
  const image = hero.querySelector("img")
  expect(image.src).toBe(baseUrl + img)
})

it("shows heading", () => {
  render(<Hero image={img} heading="A heading" />)
  const heading = screen.getByText("A heading")
  expect(heading).toBeInTheDocument()
})

it("shows blurb", () => {
  render(
    <Hero
      image={img}
      heading="A heading"
      blurb="Some blurbey stuff about a product"
    />
  )

  const blurb = screen.getByText("Some blurbey stuff about a product")
  expect(blurb).toBeInTheDocument()
})

it("shows button text", () => {
  render(
    <Hero
      image={img}
      heading="A heading"
      blurb="Some blurbey stuff about a product"
      buttonText="Learn More!"
    />
  )

  const button = screen.getByText("Learn More!")
  expect(button).toBeInTheDocument()
})

it("fires handleClick on button click", async () => {
  const handleClick = jest.fn()
  const user = userEvent.setup()
  render(
    <Hero
      image={img}
      heading="A heading"
      blurb="Some blurbey stuff about a product"
      buttonText="Learn More!"
      handleClick={handleClick}
    />
  )

  const button = screen.getByText("Learn More!")
  await user.click(button)
  expect(handleClick).toBeCalled()
})

it("has a class name of .hero", () => {
  render(
    <Hero
      image={img}
      heading="A heading"
      blurb="Some blurbey stuff about a product"
      buttonText="Learn More!"
    />
  )

  const hero = screen.getByTestId("hero")
  expect(hero).toHaveClass("hero")
})

it("accepts class modifiers", () => {
  render(
    <Hero
      image={img}
      heading="A heading"
      blurb="Some blurbey stuff about a product"
      buttonText="Learn More!"
      modifiers="home shop"
    />
  )

  const hero = screen.getByTestId("hero")
  expect(hero).toHaveClass("hero hero--home hero--shop")
})
