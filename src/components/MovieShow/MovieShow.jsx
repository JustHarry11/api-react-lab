import { Link, useParams } from "react-router";
import { getSingleMovie } from "../../services/movies";
import useFetch from "../../hooks/useFetch";

import MovieDelete from '../MovieDelete/MovieDelete'

export default function MovieShow(){

    const { movieId } = useParams()

    const { data: movie, isLoading, error } = useFetch(
        getSingleMovie,
        {},
        movieId
    )

    return (
        <>
            {error
                ? <p className="error-message">{error}</p>
                : isLoading
                    ? <p>Loading ...</p>
                    : (
                        <section className="single-activity">
                            <h1>{movie.title}</h1>
                            <h2>{movie.director}</h2>
                            <h2>{movie.year}</h2>
                            <h2>{movie.rating}</h2>
                            <Link to={`/movies/${movieId}/edit`}>Edit</Link>
                            <MovieDelete />
                        </section>
                    )}
        </>
    )
}