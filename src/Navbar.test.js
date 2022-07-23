import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom'

it('renders', () => {
  const view = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  const navbar = screen.getByTestId('navbar')
  expect(navbar).toBeInTheDocument()
  expect(view).toMatchSnapshot()
})

it('contains links to Home and Shop pages', () => {
  const view = render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )
  const homeLink = screen.getByText('Home')
  const shopLink = screen.getByText('Shop')
  expect(homeLink).toHaveAttribute('href', '/')
  expect(shopLink).toHaveAttribute('href', '/shop')
  expect(view).toMatchSnapshot()
})