import { useState } from "react"
import "./App.scss"
import Cart from "./Cart"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import SiteHeader from "./SiteHeader"
import ToggleButton from "./ToggleButton"
import useToggle from "../hooks/useToggle"

const navItems = ["Home", "Shop"]
const toNumberOfCartItems = (number, item) => {
  return number + item.quantity
}

function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const selectPage = (e) => setSelectedPage(e.target.textContent)

  const [cartOpen, toggleCartOpen] = useToggle(false)

  const [cart, setCart] = useState({})
  const addToCart = (product) => {
    if (cart[product.id]) {
      const newQuantity = cart[product.id].quantity + 1
      setCart({
        ...cart,
        [product.id]: {
          product: product,
          quantity: newQuantity
        }
      })
    } else {
      setCart({
        ...cart,
        [product.id]: {
          product: product,
          quantity: 1
        }
      })
    }
  }

  const removeFromCart = (product) => {
    if (cart[product.id] && cart[product.id].quantity === 1) {
      const newCart = { ...cart }
      delete newCart[product.id]
      setCart(newCart)
    }

    if (cart[product.id]) {
      const newQuantity = cart[product.id].quantity - 1

      setCart({
        ...cart,
        [product.id]: {
          product: product,
          quantity: newQuantity
        }
      })
    }
  }

  const numberOfCartItems = Object.values(cart).reduce(toNumberOfCartItems, 0)
  return (
    <div className="app">
      <SiteHeader
        selected={selectedPage}
        handleItemClick={selectPage}
        navItems={navItems}
        toggleCartOpen={toggleCartOpen}
        numberOfCartItems={numberOfCartItems}
      />

      {cartOpen ? <Cart cart={cart} /> : null}

      {selectedPage === "Home" ? <HomePage /> : null}

      {selectedPage === "Shop" ? (
        <ShopPage handleAddToCart={addToCart} />
      ) : null}
    </div>
  )
}

export default App
