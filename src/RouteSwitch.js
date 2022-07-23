import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import App from "./App"
import Home from "./Home"
import Shop from "./Shop"

export default function RouteSwitch() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}