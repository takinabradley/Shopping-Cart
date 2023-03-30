import { useReducer, useState } from "react"
import "../component-styles/App.scss"
import Cart from "./Cart"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import SiteHeader from "./SiteHeader"
import useToggle from "../hooks/useToggle"
import cartReducer from "../reducers/cartReducer"
import createBEM from "@takinabradley/bem-names"
import { Link, Outlet } from "react-router-dom"

const navItems = [<Link to="/home">Home</Link>, <Link to="/shop">Shop</Link>]
/* const navItems = ["Home", "Shop"] */
const toNumberOfCartItems = (number, item) => {
  return number + item.quantity
}

const BEM = createBEM("app")
function App() {
  const [selectedPage, setSelectedPage] = useState("")
  const selectPage = (e) => setSelectedPage(e.currentTarget.textContent)
  const [cartOpen, toggleCartOpen] = useToggle(false)

  const [cart, setCart] = useReducer(cartReducer, {})
  const addToCart = (product) => setCart({ type: "add", product })
  const removeFromCart = (product) => setCart({ type: "remove", product })
  const setItemInCart = (product, quantity) =>
    setCart({ type: "set", product, quantity })

  const numberOfCartItems = Object.values(cart).reduce(toNumberOfCartItems, 0)
  return (
    <div className={BEM.b} data-testid="app">
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
          <Outlet context={{ handleAddToCart: addToCart }} />
          {/* {selectedPage === "Home" ? <HomePage /> : null}
          {selectedPage === "Shop" ? (
            <ShopPage handleAddToCart={addToCart} />
          ) : null} */}
        </main>
      </div>

      <div
        className={`\
            ${BEM.e("sidebar")} ${!cartOpen ? BEM.e("sidebar", "closed") : ""}\
          `}
        data-testid={BEM.e("sidebar")}
      >
        <Cart cart={cart} setCartItems={setItemInCart} />
      </div>
    </div>
  )
}

export default App
