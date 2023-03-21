import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import products from "../products"
import { useState } from "react";
import "../App.css"
function App() {
  console.log(products)
  return (
    <div className="App">
      <Navbar />
      
      <Outlet context={{products}}/>
    </div>
  );
}

export default App;
