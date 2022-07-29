import '@testing-library/jest-dom'
import React from 'react'
import { screen, render } from '@testing-library/react'
import ProductList from './ProductList'
import uniquid from 'uniquid'

it('renders a list of products', () => {
  const products = {}
  render(<ProductList products={products} />)
  
  const productList = screen.getAllByTestId('productList')

  expect(productList.length).toBe(1)
})

it('renders items in a list', () => {
  const products = {
    product1: {
      name: 'product1',
      img: '',
      description: 'a product',
      price: 150,
      stock: 3,
      id: uniquid()
    },
    product2: {
      name: 'product2',
      img: '',
      description: 'a product',
      price: 30,
      stock: 15,
      id: uniquid()
    },
  }

  render(<ProductList products={products} />)

  const productCards = screen.getAllByTestId('productCard')
  expect(productCards.length).toBe(2)
})