import { useEffect, useState } from "react";
import { Link } from 'react-router'

import { getAllMovies } from "../../services/movies";

export default function MovieIndex(){
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getMovies() {
            try {
                const { data } = await getAllMovies()
                setMovies(data)
            } catch {
                setError('Failed to fetch activity data. Please try again later.')
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, [])

    return (
        <>
            <h1>Movies</h1>
            <section className="movie-list">
                {error
                    ?<p className="error-message">{error}</p>
                    : loading  
                        ? <p>Loading...</p>
                        : movies.length > 0
                            ? movies.map(movie => (
                                <Link key={movie._id} to={`/movies/${movie._id}`}>
                                    <article>
                                        <h2>{movie.title}</h2>
                                    </article>
                                </Link>
                            ))
                        : <p>No movies found</p>
                }
            </section>
        </>
    )

}