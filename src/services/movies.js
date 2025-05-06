import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const getAllMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movies`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getSingleMovie = async (movieId) => {
    try {
        const response = await axios.get(`${BASE_URL}/movies/${movieId}`)
        return response
    } catch (error) {
        console.log(error)
        throw error
    }
}

