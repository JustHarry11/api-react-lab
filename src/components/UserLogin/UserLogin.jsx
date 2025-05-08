import { useState } from "react"
import { loginUser } from "../../services/movies"
import { useNavigate } from "react-router";
import Spinner from "../Spinner/Spinner";
import './UserLogin.css'


export default function UserLogin() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(evt) {
        evt.preventDefault()
        setIsLoading(true)
        try {
            const { data } = await loginUser(userData)
            localStorage.setItem('movieDB.token', data.token)
            navigate(`/movies`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleChange(evt){
        const copiedObject = { ...userData }
        copiedObject[evt.target.name] = evt.target.value
        setUserData(copiedObject)
        setError({...error, [evt.target.name]: ''})
    }

        return (
            <section id="form-page">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Log In</h1>

                    <div className="input-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="Email" onChange={handleChange} value={userData.email} required />
                        {error.email && <p className="error-message">{error.email}</p>}
                    </div>

                    <div className="input-control">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} required />
                        {error.password && <p className="error-message">{error.password}</p>}
                    </div>
    

    
    
                    <button type="submit">{ isLoading ? <Spinner />: 'Create User'}</button>
                </form>
            </section>
        )
}