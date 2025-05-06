import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleMovie } from "../../services/movies";

export default function MovieShow(){
    const [movie, setMovie] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const { movieId } = useParams()

    useEffect(() => {
        async function getMovie() {
            try {
                const { data } = await getSingleMovie(movieId)
                setMovie(data)
            } catch (error) {
                if(error.status === 400) {
                    setError('Movie not found!')
                } else {
                    setError(error.message)
                }
            } finally {
                setLoading(false)
            } 
        }
        getMovie()
    }, [movieId])

    return (
        <>
            {error
                ? <p className="error-message">{error}</p>
                : loading
                    ? <p>Loading ...</p>
                    : (
                        <section className="single-activity">
                            <h1>{movie.title}</h1>
                        </section>
                    )}
        </>
    )
}