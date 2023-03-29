import Block from "./Block"
import createBEM from "@takinabradley/bem-names"
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

const BEM = createBEM("block")

it("requires BEM name object", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  expect(() => render(<Block />)).toThrowError()
})

it("renders", () => {
  render(<Block BEM={BEM} />)

  const block = document.querySelector(".block")

  expect(block).toBeInTheDocument()
})

it("renders with given testid", () => {
  render(<Block BEM={BEM} testid={BEM.b} />)

  const block = screen.getByTestId("block")
  expect(block).toBeInTheDocument()
})

it("renders a div by default", () => {
  render(<Block BEM={BEM} testid={BEM.b} />)

  const block = screen.getByTestId(BEM.b)
  expect(block.tagName).toBe("DIV")
})

it("renders a div by when type='div' is passed", () => {
  render(<Block BEM={BEM} testid={BEM.b} type="div" />)

  const block = screen.getByTestId(BEM.b)
  expect(block.tagName).toBe("DIV")
})

it("renders a header when type='header' is passed", () => {
  render(<Block BEM={BEM} testid={BEM.b} type="header" />)

  const block = screen.getByTestId(BEM.b)
  expect(block.tagName).toBe("HEADER")
})

it("renders children", () => {
  render(
    <Block BEM={BEM} testid={BEM.b} type="header">
      <div data-testid="child">Child Element</div>
    </Block>
  )

  const child = screen.getByText("Child Element")
  expect(child).toBeInTheDocument()
})

describe("Block renders modifier class names correctly", () => {
  test("single modifier", () => {
    render(<Block BEM={BEM} modifiers="mod1" testid={BEM.b} />)

    const block = screen.getByTestId(BEM.b)
    expect(block).toHaveClass(`block block--mod1`)
  })

  test("multiple modifiers", () => {
    render(<Block BEM={BEM} modifiers="mod1 mod-2" testid={BEM.b} />)

    const block = screen.getByTestId(BEM.b)
    expect(block).toHaveClass(`block block--mod1 block--mod-2`)
  })
})
