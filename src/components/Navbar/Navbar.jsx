import { NavLink } from "react-router";
import './Navbar.css'
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { removeToken } from "../../utilities/auth";

export default function NavBar(){

    const { user, setUser } = useContext(UserContext)

    const handleSignOut = () => {
        removeToken()
        setUser(null)
    }

    return (
        <header>
            <div className="brand-logo">
                <NavLink to="/">🍿</NavLink>
            </div>
            <nav>
                <NavLink to="/movies">Movies</NavLink>

                { user
                    ? (
                        <>
                            {/* Signed in routes */}
                            <NavLink to="/movies/new">Add Movie</NavLink>
                            <NavLink onClick={handleSignOut} to="/login">Sign Out</NavLink>
                        </>
                    )
                    : (
                        <>
                            {/* Signed out routes*/}
                            <NavLink to="/register">Create User</NavLink>
                            <NavLink to="/login">Log In</NavLink>
                        </>
                    )
                }
                

            </nav>
        </header>
    )
}