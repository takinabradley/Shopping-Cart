import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"
import { act } from "@testing-library/react"
import ShopPage from "./ShopPage"
import getMockData from "../scripts/getMockData"
jest.mock("../scripts/getMockData.js")

const mockData1 = [
  {
    id: 0,
    title: "Product1",
    description: "Description of Product1",
    price: "$100"
  }
]

const mockData2 = [
  ...mockData1,
  {
    id: 1,
    title: "Product2",
    description: "Description of Product2",
    price: "$150"
  },
  {
    id: 2,
    title: "Product3",
    description: "Description of Product3",
    price: "$150"
  }
]

const mockData4 = [
  ...mockData2,
  {
    id: 3,
    title: "Product4",
    description: "Description of Product4",
    price: "$175"
  }
]

const mockData7 = [
  ...mockData4,
  {
    id: 4,
    title: "Product5",
    description: "Description of Product5",
    price: "$200"
  },
  {
    id: 5,
    title: "Product6",
    description: "Description of Product6",
    price: "$1"
  },
  {
    id: 6,
    title: "Product7",
    description: "Description of Product7",
    price: "$0"
  }
]

it("renders", async () => {
  getMockData.mockReturnValueOnce([])
  render(<ShopPage />)
  const shopPage = await screen.findByTestId("shop-page")
  expect(shopPage).toBeInTheDocument()
})

it("has class name of .shop-page", async () => {
  getMockData.mockReturnValueOnce([])

  render(<ShopPage />)
  const shopPage = await screen.findByTestId("shop-page")
  expect(shopPage).toHaveClass("shop-page")
})

it("accepts class modifiers", async () => {
  getMockData.mockReturnValueOnce([])

  render(<ShopPage modifiers="terminal-green" />)
  const shopPage = await screen.findByTestId("shop-page")
  expect(shopPage).toHaveClass("shop-page shop-page--terminal-green")
})

it("shows a hero banner", async () => {
  getMockData.mockReturnValueOnce([])

  render(<ShopPage />)
  const shopPage = await screen.findByTestId("shop-page")
  expect(shopPage).toContainElement(screen.getByTestId("hero"))
})

it("renders no banners when there's no data", async () => {
  getMockData.mockReturnValueOnce([])

  render(<ShopPage />)
  const shopPage = await screen.findByTestId("shop-page")
  const bannerContainer = shopPage.querySelector(".shop-page__banners")
  expect(bannerContainer.childElementCount).toBe(0)
})

describe("renders banners when there is data", () => {
  it("one banner, one item", async () => {
    getMockData.mockReturnValueOnce(mockData1)

    render(<ShopPage />)
    const shopPage = await screen.findByTestId("shop-page")
    const bannerContainer = shopPage.querySelector(".shop-page__banners")
    expect(bannerContainer.childElementCount).toBe(1)
  })

  it("one banner, three items", async () => {
    getMockData.mockReturnValueOnce(mockData2)

    render(<ShopPage />)
    const shopPage = await screen.findByTestId("shop-page")
    const bannerContainer = shopPage.querySelector(".shop-page__banners")
    expect(bannerContainer.childElementCount).toBe(1)
  })

  it("renders a new banner after more than three items in the last", async () => {
    getMockData.mockReturnValueOnce(mockData4)

    render(<ShopPage />)
    const shopPage = await screen.findByTestId("shop-page")
    const bannerContainer = shopPage.querySelector(".shop-page__banners")
    expect(bannerContainer.childElementCount).toBe(2)
  })

  it("renders more than two banners", async () => {
    getMockData.mockReturnValueOnce(mockData7)

    render(<ShopPage />)
    const shopPage = await screen.findByTestId("shop-page")
    const bannerContainer = shopPage.querySelector(".shop-page__banners")
    expect(bannerContainer.childElementCount).toBe(3)
  })
})
