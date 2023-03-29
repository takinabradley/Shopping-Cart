import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import ToggleButton from "./ToggleButton"

it("renders", () => {
  render(
    <ToggleButton>
      <div>Child!</div>
    </ToggleButton>
  )

  const child = screen.getByText("Child!")
  expect(child).toBeInTheDocument()
})

it("renders with given className", () => {
  render(<ToggleButton className="a-class" />)
  const btn = document.querySelector(".a-class")
  expect(btn).toBeInTheDocument()
})

it("fires toggle function when clicked", async () => {
  const cb = jest.fn()
  const user = userEvent.setup()
  render(
    <ToggleButton className="a-class" toggle={cb}>
      Click Me!
    </ToggleButton>
  )
  const btn = screen.getByText("Click Me!")
  expect(cb).not.toHaveBeenCalled()
  await user.click(btn)

  expect(cb).toHaveBeenCalledTimes(1)
})
