import { Link } from 'react-router'
import useFetch from "../../hooks/useFetch";
import { getAllMovies } from '../../services/movies';

export default function MovieIndex(){

    const { data: movies, isLoading, error} = useFetch(getAllMovies, [])

    return (
        <>
            <h1>Movies</h1>
            <section className="movie-list">
                {error
                    ?<p className="error-message">{error}</p>
                    : isLoading  
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