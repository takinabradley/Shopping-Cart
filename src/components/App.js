import { useState } from "react"
import "../App.css"
import SiteHeader from "./SiteHeader"
function App() {
  const [selectedPage, setSelectedPage] = useState("Home")
  const selectPage = (e) => setSelectedPage(e.target.textContent)

  return (
    <div className="App">
      <SiteHeader selected={selectedPage} handleLinkClick={selectPage} />
    </div>
  )
}

export default App
