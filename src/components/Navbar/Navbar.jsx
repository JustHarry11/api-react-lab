import { Link, NavLink } from "react-router";
import './Navbar.css'

export default function NavBar(){
    return (
        <header>
            <div className="brand-logo">
                <NavLink to="/">🍿</NavLink>
            </div>
            <nav>
                <a href="/movies">Movies</a>
            </nav>
        </header>
    )
}