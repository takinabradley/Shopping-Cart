import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import HomePage from "./HomePage"

it("renders", () => {
  expect(() => render(<HomePage />)).not.toThrow()
  const home = screen.getByTestId("home")
  expect(home).toBeInTheDocument()
})

it("has classname of .home", () => {
  render(<HomePage />)
  const home = screen.getByTestId("home")
  expect(home).toHaveClass("home")
})

it("accepts class modifiers", () => {
  render(<HomePage modifiers="dark light" />)
  const home = screen.getByTestId("home")
  expect(home).toHaveClass("home home--dark home--light")
})
