import { Link, useLocation } from "react-router-dom"

import './Styles/Navbar.css'


export default function Navbar(){
    const location = useLocation()
    const links = [
        {
          name: "Login",
          path: "/login",
          
        },   
        {
          name: "Home",
          path: "/",
          
        },
        {
          name: "Shop",
          path: "/shop",
          
        },
        {
          name: "ShoppingList",
          path: "/shoppinglist",
         
        },   
      ]
    return(
        <div className="navbar-container">
            <p className='logo'>Shoppie<span>Space.</span></p>
            <div className="nav-links">
          { links.map(link =>(<Link className={location.pathname === link.path ? "active" : "" } to={link.path} key={link.name}>{link.name}</Link>))}
         
          
          </div>
        </div>
    )
}