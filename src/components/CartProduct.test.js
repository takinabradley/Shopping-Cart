import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import CartProduct from "./CartProduct"

const cartItem = {
  product: {
    id: 1,
    title: "title",
    price: "$100"
  },
  quantity: 5
}

const cartItem2 = {
  product: {
    id: 2,
    title: "title2",
    price: "$12"
  },
  quantity: 1
}

const cartItem3 = {
  product: {
    id: 3,
    title: "title3",
    price: "$0"
  },
  quantity: 0
}

it("errors without a cart item", () => {
  jest.spyOn(console, "error").mockImplementation(() => {})
  expect(() => render(<CartProduct />)).toThrow()
})

it("works with cart item data", () => {
  expect(() => render(<CartProduct item={cartItem} />)).not.toThrow()
  const cartProduct = screen.getByTestId("cart-product")
  expect(cartProduct).toBeInTheDocument()
})

it("has class name of cart-product", () => {
  render(<CartProduct item={cartItem} />)
  const cartProduct = screen.getByTestId("cart-product")
  expect(cartProduct).toHaveClass("cart-product")
})

it("accepts class modifiers", () => {
  render(<CartProduct item={cartItem} modifiers="mod1 mod2 mod3" />)
  const cartProduct = screen.getByTestId("cart-product")

  expect(cartProduct).toHaveClass(
    "cart-product cart-product--mod1 cart-product--mod2 cart-product--mod3"
  )
})

it("shows title", () => {
  render(<CartProduct item={cartItem} />)
  const title = screen.getByText("title")
  expect(title).toBeInTheDocument()
})

it("shows price", () => {
  render(<CartProduct item={cartItem} />)
  const price = screen.getByText("$100")
  expect(price).toBeInTheDocument()
})

describe("shows proper quantity", () => {
  test("5", () => {
    render(<CartProduct item={cartItem} />)
    const quantity = screen.getByDisplayValue("5")
    expect(quantity).toBeInTheDocument()
  })

  test("1", () => {
    render(<CartProduct item={cartItem2} />)
    const quantity = screen.getByDisplayValue("1")
    expect(quantity).toBeInTheDocument()
  })

  test("0", () => {
    render(<CartProduct item={cartItem3} />)
    const quantity = screen.getByDisplayValue("0")
    expect(quantity).toBeInTheDocument()
  })
})

describe("changes quanity on input", () => {
  test("51", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("1")

    expect(quantityInput.value).toBe("51")
    expect(setItem).not.toHaveBeenCalled()
  })

  test("empty string", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]")

    expect(quantityInput.value).toBe("")
    expect(setItem).not.toHaveBeenCalled()
  })

  test("12", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]12")

    expect(quantityInput.value).toBe("12")
    expect(setItem).not.toHaveBeenCalled()
  })
})

describe("calls setItem on blue or on enter", () => {
  test("on enter", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]1")
    expect(setItem).not.toHaveBeenCalled()

    await user.keyboard("[Enter]")
    expect(quantityInput.value).toBe("1")
    expect(setItem).toHaveBeenCalledTimes(1)
  })

  test("on blur", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]2")
    expect(setItem).not.toHaveBeenCalled()
    expect(quantityInput.value).toBe("2")
    fireEvent.blur(quantityInput)

    expect(setItem).toHaveBeenCalledTimes(1)
  })

  test("on blur (Tab)", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]2")
    expect(setItem).not.toHaveBeenCalled()
    expect(quantityInput.value).toBe("2")
    await user.keyboard("[BackSpace]2[Tab]")

    expect(setItem).toHaveBeenCalledTimes(1)
  })

  test("not on text input", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]21324jlk a dasf7")

    expect(setItem).toHaveBeenCalledTimes(0)
  })
})

describe("calls setItem correctly", () => {
  test("cartItem2 product, quantity 1", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem2} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("1")
    await user.click(quantityInput)
    await user.keyboard("[BackSpace]1")
    expect(setItem).not.toHaveBeenCalled()

    await user.keyboard("[Enter]")
    expect(quantityInput.value).toBe("1")
    expect(setItem).toHaveBeenCalledWith(cartItem2.product, 1)
  })

  test("cartItem product, quantity 551", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("5")
    await user.click(quantityInput)
    await user.keyboard("51")
    expect(setItem).not.toHaveBeenCalled()

    await user.keyboard("[Enter]")
    expect(quantityInput.value).toBe("551")
    expect(setItem).toHaveBeenCalledWith(cartItem.product, 551)
  })

  test("cartItem3 product, quantity 0", async () => {
    const setItem = jest.fn()
    const user = userEvent.setup()
    render(<CartProduct item={cartItem3} setItem={setItem} />)

    const quantityInput = screen.getByDisplayValue("0")
    await user.click(quantityInput)
    await user.keyboard("[Backspace]111")
    expect(setItem).not.toHaveBeenCalled()

    await user.keyboard("[Enter]")
    expect(quantityInput.value).toBe("111")
    expect(setItem).toHaveBeenCalledWith(cartItem3.product, 111)
  })
})
