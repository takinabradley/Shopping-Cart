import React from "react";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from './App';
import { MemoryRouter, Route, Routes, Navigate } from 'react-router-dom'


it('renders App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  
  const navbar = screen.getByTestId('navbar')
  expect(navbar).toBeInTheDocument()
})

it('renders the outlet', () => {
  const Home = jest.fn(() => <div data-testid='home'>Home Page</div>)
  
  const {container} = render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </MemoryRouter>
  )
  
  const homeComponent = screen.getByTestId('home')
  expect(Home).toBeCalled()
  expect(homeComponent).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

it('links can change the outlet component', async () => {
  const Home = jest.fn(() => <div data-testid='home'>Home Page</div>)
  const Shop = jest.fn(() => <div data-testid='shop'>Shop Page</div>)
  
  const { container } = render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
        </Route>
      </Routes>
    </MemoryRouter>
  )
  
  expect(container).toMatchSnapshot()

  const shopLink = screen.getByText('Shop')
  userEvent.click(shopLink)

  const shopComponent = await screen.findByTestId('shop')
  expect(Shop).toBeCalledTimes(1)
  expect(shopComponent).toBeInTheDocument()
})
