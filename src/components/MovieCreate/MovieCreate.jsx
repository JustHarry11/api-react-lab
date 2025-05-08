import { useState } from "react";
import { useNavigate } from "react-router";
import './MovieCreate.css'
import { createMovie } from "../../services/movies";
import Spinner from "../Spinner/Spinner";

export default function MovieCreate(){

    const [formData, setFormData] = useState({
        title: '',
        director: '',
        year: '',
        rating: ''
    })

    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(evt){
        evt.preventDefault()
        setIsLoading(true)
        try {
            const { data } = await createMovie(formData)
            navigate(`/movies/${data._id}`)
        } catch (error) {
            setError(error.response.data)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleChange(evt){
        const copiedObject = { ...formData }
        copiedObject[evt.target.name] = evt.target.value
        setFormData(copiedObject)
    }

    return (
        <section id="form-page">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Movie</h1>

                <div className="input-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Title" onChange={handleChange} value={formData.title} required />
                    {error.title && <p className="error-message">{error.title}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="director">Director</label>
                    <input type="text" name="director" id="director" placeholder="Director" onChange={handleChange} value={formData.director} required />
                    {error.director && <p className="error-message">{error.director}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" id="year" placeholder="2000" onChange={handleChange} value={formData.year} required />
                    {error.year && <p className="error-message">{error.year}</p>}
                </div>

                <div className="input-control">
                    <label htmlFor="rating">Rating</label>
                    <input type="number" name="rating" id="rating" placeholder="1.5" onChange={handleChange} value={formData.rating} required />
                    {error.rating && <p className="error-message">{error.rating}</p>}
                </div>

                {error.message && <p className="error-message">{error.message}</p>}

                <button type="submit">{ isLoading ? <Spinner />: 'Add Movie'}</button>
            </form>
        </section>
    )
}