import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom'

it('renders', () => {
  const {container} = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const navbar = screen.getByTestId('navbar')
  expect(navbar).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

it('contains links to Home and Shop pages', () => {
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  const homeLink = screen.getByText('Home')
  const shopLink = screen.getByText('Shop')
  expect(homeLink).toHaveAttribute('href', '/')
  expect(shopLink).toHaveAttribute('href', '/shop')
})