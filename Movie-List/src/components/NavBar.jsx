import { Link } from "react-router-dom";
import "../css/Navbar.css"

function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to='/'>Movie app</Link>
        </div>
        <div className="navbar-links">
            <Link className="nav-link" to='/'>
            Home
            </Link>
            <Link className="nav-link" to='/favs'>
            Favs
            </Link>
        </div>
    </nav>
}

export default NavBar