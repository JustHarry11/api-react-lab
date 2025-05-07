import { NavLink } from "react-router";
import './Navbar.css'

export default function NavBar(){
    return (
        <header>
            <div className="brand-logo">
                <NavLink to="/">🍿</NavLink>
            </div>
            <nav>
                <NavLink to="/movies">Movies</NavLink>
                <NavLink to="/movies/new">Add Movie</NavLink>
            </nav>
        </header>
    )
}