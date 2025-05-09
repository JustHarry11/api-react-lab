import { Link, useParams } from "react-router";
import { getSingleMovie } from "../../services/movies";
import useFetch from "../../hooks/useFetch";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import './MovieShow.css'

import Spinner from "../Spinner/Spinner";
import MovieDelete from '../MovieDelete/MovieDelete'

export default function MovieShow() {

    const { movieId } = useParams()

    const { user } = useContext(UserContext)
    console.log(user)

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
                    ? <Spinner />
                    : (
                        <section className="single-activity">
                            <h1>{movie.title}</h1>
                            <h2>{movie.director}</h2>
                            <h2>{movie.year}</h2>
                            <h2>{movie.rating}</h2>
                            {user && user._id === movie.owner  &&
                                <div className="controls">
                                    <Link className="edit-movie" to={`/movies/${movieId}/edit`}>Edit</Link>
                                    <MovieDelete />
                                </div>
                            }

                        </section>
                    )}
        </>
    )
}