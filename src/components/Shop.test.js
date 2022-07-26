import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Shop from './Shop'
it('renders', () => {
  render(<Shop />)
  
  const shopComponent = screen.getByTestId('shop')
  expect(shopComponent).toBeInTheDocument()
})