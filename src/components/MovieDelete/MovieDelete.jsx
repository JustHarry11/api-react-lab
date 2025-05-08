import { useState } from "react";
import { deleteMovie } from "../../services/movies";
import { useParams, useNavigate } from "react-router";
import Spinner from "../Spinner/Spinner";
import './MovieDelete.css'

export default function MovieDelete(){
    const [error, setError] = useState('')
    const [ isLoading, setIsLoading ] = useState(false)

    const { movieId } = useParams()
    const navigate = useNavigate()

    async function handleDelete(){
        setIsLoading(true)
        try {
            await deleteMovie(movieId)
            navigate('/movies')
        } catch (error) {
            setError(error.response.data.message)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {error && <p className="error-message">{error}</p>}
            <button className="delete-movie" onClick={handleDelete}>
                {isLoading ? <Spinner /> : 'Delete'}
            </button>
        </>
    )
}