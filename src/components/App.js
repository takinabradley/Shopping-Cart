import { useReducer, useState } from "react"
import "../component-styles/App.scss"
import Cart from "./Cart"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import SiteHeader from "./SiteHeader"
import useToggle from "../hooks/useToggle"
import cartReducer from "../reducers/cartReducer"

const navItems = ["Home", "Shop"]
const toNumberOfCartItems = (number, item) => {
  return number + item.quantity
}

function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const selectPage = (e) => setSelectedPage(e.target.textContent)

  const [cartOpen, toggleCartOpen] = useToggle(false)

  const [cart, setCart] = useReducer(cartReducer, {})
  const addToCart = (product) => setCart({ type: "add", product })
  const removeFromCart = (product) => setCart({ type: "remove", product })

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
