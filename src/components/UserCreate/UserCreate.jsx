import { useState, useContext } from "react";
import { Link, useNavigate, Navigate } from "react-router";
import { createUser } from "../../services/auth";
import { UserContext } from "../../contexts/UserContext";
import Spinner from "../Spinner/Spinner";
import './UserCreate.css'

export default function UserCreate() {

    const { user } = useContext(UserContext)

    const [userData, setUserData] = useState({
        email: '',
        username: '',
        password: '',
        passwordConfirmation: ''

    })

    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        setIsLoading(true)
        try {
            await createUser(userData)
            navigate(`/login`)
        } catch (error) {
            setError(error.response.data)
            console.log(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleChange(evt) {
        const copiedObject = { ...userData }
        copiedObject[evt.target.name] = evt.target.value
        setUserData(copiedObject)
        setError({ ...error, [evt.target.name]: '' })
    }

    if (user) {
        return <Navigate to="/" />
    }
    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create User</h1>

                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={userData.email} required />
                    {error.email && <p className="error-message">{error.email}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange} value={userData.username} required />
                    {error.username && <p className="error-message">{error.username}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} required />
                    {error.password && <p className="error-message">{error.password}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <input type="password" name="passwordConfirmation" id="passwordConfirmation" placeholder="Confirm Password" onChange={handleChange} value={userData.passwordConfirmation} required />
                    {error.passwordConfirmation && <p className="error-message">{error.passwordConfirmation}</p>}
                </div>



                <button type="submit">{isLoading ? <Spinner /> : 'Create User'}</button>
                <small>Already have an account? <Link to="/login">Log back in</Link></small>
            </form>
        </section>
    )
}