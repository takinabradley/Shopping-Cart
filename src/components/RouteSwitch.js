import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
/* import Home from "./Home"
import Shop from "./Shop" */

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Route>
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  )
}
