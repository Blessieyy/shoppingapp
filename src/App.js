
import React from 'react'
import { BrowserRouter as Router, Routes,  Route } from "react-router-dom";
import Navbar from './components/Navbar';


import Home from './Pages/Home';
import Login from './Pages/Login';
import Shop from './Pages/Shop';
import ShoppingList from './Pages/ShoppingList';


function App() {
  return (
    <div className='App'>
      
      <Router>
      {/* <Navbar /> */}
      <Login />
      <div className="container main">
       <Routes>
       <Route path="/" element={<Home />} />
       {/* <Route path="/login" element={<Login />} /> */}
       <Route path="/shop" element={<Shop />} />
       <Route path="/shoppinglist" element={<ShoppingList />} />

       </Routes>
      </div>
      </Router>
    </div>
  )
}

export default App;

