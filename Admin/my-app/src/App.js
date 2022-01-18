import React from "react";
import Slidebar from "./components/Slidebar/Slidebar";
import Home from "./Home";
import Navbar from "./components/Navbar/Navbar"
import Users from './Pages/Users/Users'
import Products from './Pages/Products/Products'
import { Link, Routes , Route } from "react-router-dom"

function App() {
  return (
    <div className="container">
          <Navbar/>
          <div className="sections">
            <Slidebar/>
            <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
            </Routes>
            </div>
         </div>
    </div>
  );
}

export default App;
