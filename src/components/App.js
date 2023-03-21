import { useState } from "react"
import "../App.css"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import SiteHeader from "./SiteHeader"

const navItems = ["Home", "Shop"]
function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const selectPage = (e) => setSelectedPage(e.target.textContent)

  return (
    <div className="App">
      <SiteHeader
        selected={selectedPage}
        handleItemClick={selectPage}
        navItems={navItems}
      />

      {selectedPage === "Home" ? <HomePage /> : null}
      {selectedPage === "Shop" ? <ShopPage /> : null}
    </div>
  )
}

export default App
