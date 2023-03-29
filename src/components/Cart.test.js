import React from "react"
import { getByTestId, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Cart from "./Cart"
import CartProduct from "./CartProduct"

jest.mock("./CartProduct")

const data1 = {
  1: {
    product: {
      id: 1,
      price: "$100"
    },
    quantity: 3
  },
  2: {
    product: {
      id: 2,
      price: "$250"
    },
    quantity: 2
  },
  3: {
    product: {
      id: 3,
      price: "$25"
    },
    quantity: 1
  }
}

const data2 = {
  1: {
    product: {
      id: 1,
      price: "$100"
    },
    quantity: 4
  }
}

const noData = {}

it("errors without cart object", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  expect(() => render(<Cart />)).toThrow(TypeError)
})

it("doesn't error with empty cart object", () => {
  expect(() => render(<Cart cart={noData} />)).not.toThrowError()
  const cart = screen.getByTestId("cart")
  expect(cart).toBeInTheDocument()
})

describe("renders the appropriate amount of cards", () => {
  it("renders no product cards with an empty cart", () => {
    CartProduct.mockReturnValueOnce(<div></div>)
    render(<Cart cart={noData} />)

    const cart = screen.getByTestId("cart")
    const cartItems = cart.querySelector(".cart__items")
    expect(cartItems.children.length).toBe(0)
  })

  it("renders three product cards with three cart items", () => {
    CartProduct.mockReturnValue(<div></div>)
    render(<Cart cart={data1} />)

    const cart = screen.getByTestId("cart")
    const cartItems = cart.querySelector(".cart__items")
    expect(cartItems.children.length).toBe(3)
  })

  it("renders one product cards with one cart item", () => {
    CartProduct.mockReturnValueOnce(<div></div>)
    render(<Cart cart={data2} />)

    const cart = screen.getByTestId("cart")
    const cartItems = cart.querySelector(".cart__items")
    expect(cartItems.children.length).toBe(1)
  })
})

describe("renders the correct total", () => {
  test("$0", () => {
    render(<Cart cart={noData} />)
    const total = screen.getByText("$0")
    expect(total).toBeInTheDocument()
  })

  test("$400", () => {
    render(<Cart cart={data2} />)
    const total = screen.getByText("$400")
    expect(total).toBeInTheDocument()
  })

  test("$825", () => {
    render(<Cart cart={data1} />)
    const total = screen.getByText("$825")
    expect(total).toBeInTheDocument()
  })
})

it("receives class modifiers", () => {
  render(<Cart cart={data2} modifiers="mod1 mod2" />)

  const cart = screen.getByTestId("cart")
  expect(cart).toHaveClass("cart cart--mod1 cart--mod2")
})

it("calls CartProduct correctly", () => {
  CartProduct.mockReset()
  CartProduct.mockReturnValue(<div></div>)
  render(<Cart cart={data2} modifiers="mod1 mod2" />)
  expect(CartProduct).toBeCalled()
  expect(CartProduct.mock.calls[0][0]).toHaveProperty("item")

  expect(CartProduct.mock.calls[0][0].item).toHaveProperty("quantity")
  expect(CartProduct.mock.calls[0][0].item.quantity).toBe(4)

  expect(CartProduct.mock.calls[0][0].item).toHaveProperty("product")
  expect(CartProduct.mock.calls[0][0].item.product).toBe(data2[1].product)

  expect(CartProduct.mock.calls[0][0]).toHaveProperty("setItem")
  expect(CartProduct.mock.calls[0][0].setItem).toBeUndefined()
})
