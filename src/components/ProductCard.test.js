import React from "react";
import "@testing-library/jest-dom"
import { screen, render } from '@testing-library/react'
import ProductCard from "./ProductCard";
import userEvent from "@testing-library/user-event"

it('renders a card', () => {
  const product = {}
  render(<ProductCard product={product} />)

  const productCard = screen.getAllByTestId('productCard')

  expect(productCard.length).toBe(1)
})

it('renders a card correctly', () => {
  const product = {
    name: 'product', description: 'a product', img: 'img', stock: 3, id: '0000'
  }
  render(<ProductCard product={product} />)

  const elems = {
    productCard: screen.getByTestId('productCard'),
    productName: screen.getByText('product'),
    productDescription: screen.getByText('a product'),
    productQuantity: screen.getByDisplayValue(0),
    productImg: screen.getByAltText('product'),
    productStock: screen.getByText('3')
  }
  
  Object.values(elems).forEach(elem => expect(elem).toBeInTheDocument())
})

it('updates quantity when changed', () => {
  const product = {
    name: 'product', description: 'a product', img: 'img', stock: 3, id: '0000'
  }
  render(<ProductCard product={product} />)

  const productQuantity = screen.getByDisplayValue(0)
  userEvent.type(productQuantity, '{backspace}1')
  expect(productQuantity.value).toBe('1')
})

it('updates stock when quantity is changed', async () => {
  const product = {
    name: 'product', description: 'a product', img: 'img', stock: 3, id: '0000'
  }
  render(<ProductCard product={product} />)

  const productQuantity = screen.getByDisplayValue(0)
  const stepDown = screen.getByText('-')
  userEvent.type(productQuantity, '2')
  userEvent.click(stepDown)

  const productStock = screen.getByText('2')
  expect(productStock).toBeInTheDocument()
  expect(productStock.className).toBe('product-stock')
  
})

it('sets stock to max and quantity to 0 when input is cleared', () => {
  const product = {
    name: 'product', description: 'a product', img: 'img', stock: 15, id: '0000'
  }
  render(<ProductCard product={product} />)

  const productQuantity = screen.getByDisplayValue('0')
  const productStock = screen.getByText('15')

  userEvent.type(productQuantity, '5')
  userEvent.type(productQuantity, '{backspace}')

  expect(productStock.textContent).toBe('15')
  expect(productQuantity.value).toBe('0')
})