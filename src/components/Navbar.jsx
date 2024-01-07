import './Navbar.css'
import { Link } from "react-router-dom"
export default () => 
<div>
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
    </nav>
</div>