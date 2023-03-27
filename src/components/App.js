import { useReducer, useState } from "react"
import "../component-styles/App.scss"
import Cart from "./Cart"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import SiteHeader from "./SiteHeader"
import useToggle from "../hooks/useToggle"
import cartReducer from "../reducers/cartReducer"
import createBEM from "@takinabradley/bem-names"
import ToggleButton from "./ToggleButton"

const navItems = ["Home", "Shop"]
const toNumberOfCartItems = (number, item) => {
  return number + item.quantity
}

const BEM = createBEM("app")
function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const selectPage = (e) => setSelectedPage(e.target.textContent)

  const [cartOpen, toggleCartOpen] = useToggle(false)

  const [cart, setCart] = useReducer(cartReducer, {})
  const addToCart = (product) => setCart({ type: "add", product })
  const removeFromCart = (product) => setCart({ type: "remove", product })
  const setItemInCart = (product, quantity) =>
    setCart({ type: "set", product, quantity })

  const numberOfCartItems = Object.values(cart).reduce(toNumberOfCartItems, 0)
  return (
    <div className={BEM.b}>
      <div className={BEM.e("app-content")}>
        <SiteHeader
          selected={selectedPage}
          handleItemClick={selectPage}
          navItems={navItems}
          isCartOpen={cartOpen}
          toggleCartOpen={toggleCartOpen}
          numberOfCartItems={numberOfCartItems}
        />

        <main className={BEM.e("page-container")}>
          {selectedPage === "Home" ? <HomePage /> : null}
          {selectedPage === "Shop" ? (
            <ShopPage handleAddToCart={addToCart} />
          ) : null}
        </main>
      </div>

      <div
        className={`
            ${BEM.e("sidebar")} ${!cartOpen ? BEM.e("sidebar", "closed") : ""}\
          `}
      >
        {cartOpen ? <Cart cart={cart} setCartItems={setItemInCart} /> : null}
      </div>
    </div>
  )
}

export default App
