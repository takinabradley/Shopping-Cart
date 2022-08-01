import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useOutletContext } from 'react-router-dom'
import Shop from './Shop'
import uniquid from 'uniquid'

jest.mock('react-router-dom')


it('renders', () => {
  render(<Shop />)
  
  const shopComponent = screen.getByTestId('shop')
  expect(shopComponent).toBeInTheDocument()
})

