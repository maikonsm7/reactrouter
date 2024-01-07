import './Navbar.css'
import { NavLink } from "react-router-dom"
export default () => 
<div>
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
    </nav>
</div>