import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App"
import RouteSwitch from "./components/RouteSwitch"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouteSwitch />
    {/*     <App /> */}
  </React.StrictMode>
)
