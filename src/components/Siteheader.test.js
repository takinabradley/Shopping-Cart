import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import SiteHeader from "./SiteHeader"

it("renders", () => {
  render(<SiteHeader />)
  const header = screen.getByTestId("site-header")
  expect(header).toBeInTheDocument()
})

it("has class name of site-header", () => {
  render(<SiteHeader />)
  const header = screen.getByTestId("site-header")
  expect(header).toHaveClass("site-header")
})

it("accepts class modifiers", () => {
  render(<SiteHeader modifiers={"nice-looking black"} />)
  const header = screen.getByTestId("site-header")
  expect(header).toHaveClass(
    "site-header site-header--nice-looking site-header--black"
  )
})

it("renders logo text", () => {
  render(<SiteHeader />)
  const logo = screen.getByText("PROCESSOR")
  expect(logo).toBeInTheDocument()
})

describe("renders list of navigion items", () => {
  it("renders empty list", () => {
    render(<SiteHeader />)
    const header = screen.getByTestId("site-header")
    const navList = header.querySelector(".site-header .site-header__nav-list")
    expect(navList).toBeInTheDocument()
    expect(navList.childElementCount).toBe(0)
  })

  it("renders 5 nav items", () => {
    render(<SiteHeader navItems={["1", "2", "3", "4", "5"]} />)
    const header = screen.getByTestId("site-header")
    const navList = header.querySelector(".site-header .site-header__nav-list")
    expect(navList).toBeInTheDocument()
    expect(navList.childElementCount).toBe(5)
  })

  it("renders 9 nav items", () => {
    render(
      <SiteHeader
        navItems={["1", "2", "3", "4", "5", "6", "7", "eight", "nine"]}
      />
    )
    const header = screen.getByTestId("site-header")
    const navList = header.querySelector(".site-header .site-header__nav-list")
    expect(navList).toBeInTheDocument()
    expect(navList.childElementCount).toBe(9)
  })
})

it("selects the correct navigation item", () => {
  render(<SiteHeader navItems={["1", "2", "3"]} selected={"1"} />)
  const first = screen.getByText("1")
  const second = screen.getByText("2")
  const third = screen.getByText("3")

  expect(first).toHaveClass(
    "site-header__nav-item site-header__nav-item--selected"
  )

  expect(second).toHaveClass("site-header__nav-item")
  expect(third).toHaveClass("site-header__nav-item")
})

it("calls handleItemClick when an item is clicked", async () => {
  const user = userEvent.setup()
  const handleClick = jest.fn()
  render(
    <SiteHeader
      navItems={["1", "2"]}
      selected="1"
      handleItemClick={handleClick}
    />
  )
  const first = screen.getByText("1")
  const second = screen.getByText("2")
  expect(handleClick).toHaveBeenCalledTimes(0)
  await user.click(first)
  expect(handleClick).toHaveBeenCalledTimes(1)
  await user.click(second)
  expect(handleClick).toHaveBeenCalledTimes(2)
})

it('Displays "Close Cart!" when the cart is open', () => {
  render(<SiteHeader navItems={["1", "2"]} selected="1" isCartOpen={true} />)

  const toggleBtn = screen.getByText("Close Cart!")
  expect(toggleBtn).toBeInTheDocument()
})

it('Displays "Open Cart!" when the cart is closed', () => {
  render(<SiteHeader navItems={["1", "2"]} selected="1" isCartOpen={false} />)

  const toggleBtn = screen.getByText("Open Cart!")
  expect(toggleBtn).toBeInTheDocument()
})

it("shows number of cart items when items are in cart", () => {
  render(
    <SiteHeader
      navItems={["1", "2"]}
      selected="1"
      isCartOpen={false}
      numberOfCartItems={5}
    />
  )

  const toggleBtn = screen.getByText("(5)", { exact: false })
  expect(toggleBtn).toBeInTheDocument()
})

it("doesn't show number of cart items when items aren't in cart", () => {
  render(
    <SiteHeader
      navItems={["1", "2"]}
      selected="1"
      isCartOpen={false}
      numberOfCartItems={0}
    />
  )

  const toggleBtn = screen.getByText("Open Cart!", { exact: true })
  const numText = screen.queryByText("(0)")
  expect(toggleBtn).toBeInTheDocument()
  expect(numText).not.toBeInTheDocument()
})

it("calls toggle method when the cart button is clicked", async () => {
  const user = userEvent.setup()
  const toggleFunc = jest.fn()

  render(
    <SiteHeader
      navItems={["1", "2"]}
      selected="1"
      isCartOpen={false}
      numberOfCartItems={0}
      toggleCartOpen={toggleFunc}
    />
  )

  const cartBtn = screen.getByText("Open Cart!")

  expect(toggleFunc).not.toHaveBeenCalled()

  await user.click(cartBtn)
  expect(toggleFunc).toHaveBeenCalledTimes(1)
})
