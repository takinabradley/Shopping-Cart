import React, { useState } from "react";
import SteppableInput from "./SteppableInput";
import "@testing-library/jest-dom"
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it('renders', () => {
  render(<SteppableInput />)
  const steppableInput = screen.getByTestId('steppable-input');
  expect(steppableInput).toBeInTheDocument()
})

it('renders value correctly', () => {
  render(<SteppableInput value={1} />)
  const steppableInput = screen.getByRole('textbox');

  expect(steppableInput.value).toBe('1')
})

it('updates value/calls onChange correctly', () => {
  const spyOn = jest.fn()
  const TestWrapper = () => {
    const [mockState, setMockState] = useState(0)
    const onChangeValue = (value) => {
      spyOn(value)
      if (isNaN(value)) {
        setMockState(0) //if input field is emptied, fix it by setting to 0
      } else {
        setMockState(value)
      }
    } 
    return (<SteppableInput value={mockState} onChange={onChangeValue} />)
  }

  render(<TestWrapper />)
  const inputField = screen.getByRole('textbox')
  const stepUpBtn = screen.getByText('+')
  const stepDownBtn = screen.getByText('-')

  userEvent.type(inputField, '11{backspace}{backspace}') //0
  userEvent.click(stepUpBtn)
  userEvent.click(stepDownBtn) 
  userEvent.click(stepDownBtn) 

  expect(inputField.value).toBe('-1')
  expect(spyOn).toBeCalledTimes(7)
  expect(spyOn).toHaveBeenNthCalledWith(1, 1)
  expect(spyOn).toHaveBeenNthCalledWith(2, 11)
  expect(spyOn).toHaveBeenNthCalledWith(3, 1)
  expect(spyOn).toHaveBeenNthCalledWith(4, NaN)
  expect(spyOn).toHaveBeenNthCalledWith(5, 1)
  expect(spyOn).toHaveBeenNthCalledWith(6, 0)
  expect(spyOn).toHaveBeenNthCalledWith(7, -1) 
})