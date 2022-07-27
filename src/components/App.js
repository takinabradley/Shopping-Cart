import { Outlet } from "react-router-dom"
import Navbar from "./Navbar";
import products from "../products"

function App() {

  return (
    <div className="App">
      <Navbar />
      
      <Outlet context={{products}}/>
    </div>
  );
}

export default App;
