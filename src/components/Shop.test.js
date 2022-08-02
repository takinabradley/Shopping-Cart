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

it('renders ProductsList component when recieves products', () => {
  const products = {}
  useOutletContext.mockReturnValue({ products })
  render(<Shop />)
  
  const productList = screen.getByTestId('productList')
  expect(productList).toBeInTheDocument()
})

it('renders products from outlet context', () => {
  const products = {
    product1: { name: 'product1', id: uniquid()},
    product2: { name: 'product2', id: uniquid()}
  }
  useOutletContext.mockReturnValue({ products })

  render(<Shop />)
  
  const productList = screen.getByTestId('productList')
  const productCard = screen.getAllByTestId('productCard')

  expect(productList).toBeInTheDocument()
  expect(productCard.length).toBe(2)
})

