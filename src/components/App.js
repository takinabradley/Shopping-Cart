import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import PRODUCTS from "../products"
import { useState } from "react";

function App() {

  const [products, setProducts] = useState(PRODUCTS)
  

  return (
    <div className="App">
      <Navbar />
      
      <Outlet context={{products, setProducts}}/>
    </div>
  );
}

export default App;
