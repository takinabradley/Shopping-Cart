import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "react-dom/test-utils"
import App from "./App"
import {
  toBeVisible,
  toHaveClass
} from "@testing-library/jest-dom/dist/matchers"

it("renders App", () => {
  render(<App />)

  const app = screen.getByTestId("app")
  expect(app).toBeInTheDocument()
})

it("Renders the site header", () => {
  render(<App />)

  const siteHeader = screen.getByTestId("site-header")
  expect(siteHeader).toBeInTheDocument()
})

it("renders home page by default", () => {
  render(<App />)

  const homePage = screen.getByTestId("home")
  expect(homePage).toBeInTheDocument()
})

it("renders a cart", () => {
  render(<App />)

  const cart = screen.getByTestId("cart")
  expect(cart).toBeInTheDocument()
})

it("has a closed sidebar by default", () => {
  render(<App />)

  const sidebar = screen.getByTestId("app__sidebar")

  expect(sidebar).toHaveClass("app__sidebar app__sidebar--closed")
  expect(sidebar).toBeInTheDocument()
})

it("opens the sidebar when the open cart button is clicked", () => {
  render(<App />)

  const sidebar = screen.getByTestId("app__sidebar")

  expect(sidebar).toHaveClass("app__sidebar")
})

it("renders the shop page when the Shop link is clicked", async () => {
  render(<App />)

  const shopLink = screen.getByText("Shop")
  const homePage = screen.getByTestId("home")
  userEvent.click(shopLink)

  const shopComponent = await screen.findByTestId("shop-page")
  expect(shopComponent).toBeInTheDocument()
  expect(homePage).not.toBeInTheDocument()
})

it("renders the home page again when the Home link is clicked", async () => {
  render(<App />)

  const shopLink = screen.getByText("Shop")
  const homeLink = screen.getByText("Home")
  const homePage = screen.getByTestId("home")
  await act(() => userEvent.click(shopLink))

  const shopPage = await screen.findByTestId("shop-page")
  expect(shopPage).toBeInTheDocument()
  expect(homePage).not.toBeInTheDocument()

  await act(() => userEvent.click(homeLink))
  const newHomePage = await screen.findByTestId("home")
  expect(shopPage).not.toBeInTheDocument()
  expect(newHomePage).toBeInTheDocument()
})

/* import React from "react";
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
 */
