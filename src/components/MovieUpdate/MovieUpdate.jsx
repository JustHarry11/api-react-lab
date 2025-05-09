import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Navigate } from "react-router";
import { getSingleMovie, updateMovie } from "../../services/movies";
import Spinner from "../Spinner/Spinner";
import { UserContext } from "../../contexts/UserContext";

export default function MovieUpdate() {

    const { user } = useContext(UserContext)

    const [formData, setFormData] = useState({
        title: '',
        director: '',
        year: '',
        rating: ''
    })

    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const { movieId } = useParams()
    const navigate = useNavigate()

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target.name]: target.value })
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        setIsLoading(true)
        try {
            await updateMovie(movieId, formData)
            navigate(`/movies/${movieId}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        async function getMovieData() {
            try {
                const { data } = await getSingleMovie(movieId)
                setFormData(data)
            } catch (error) {
                console.log(error)
                setError({ ...error, preload: 'Failed to preload field values' })
            }
        }
        getMovieData()
    }, [movieId])

    // * Before rendering the form page, check if user is logged in, navigating them away if not
    if (!user) {
        return <Navigate to="/login" />
    }


    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Update Movie</h1>

                <div className="input-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" onChange={handleChange} value={formData.title} required />
                    {error.title && <p className="error-message">{error.title}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="director">Director</label>
                    <input type="text" name="director" id="director" placeholder="Director" onChange={handleChange} value={formData.director} required />
                    {error.title && <p className="error-message">{error.title}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" id="year" placeholder="2000" onChange={handleChange} value={formData.year} required />
                    {error.title && <p className="error-message">{error.title}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name="rating" id="rating" placeholder="1.5" onChange={handleChange} value={formData.rating} required />
                    {error.title && <p className="error-message">{error.title}</p>}
                </div>

                {error.message && <p className="error-message">{error.message}</p>}
                {error.preload && <p className="error-message">{error.preload}</p>}

                <button type="submit">{isLoading ? <Spinner /> : 'Update Movie'}</button>
            </form>
        </section>
    )
}