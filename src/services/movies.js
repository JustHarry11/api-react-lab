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

export const createMovie = async (formData) => {
    try {
        return axios.post(`${BASE_URL}/movies`, formData)
    } catch (error) {
        console.log(error)
        throw error
        
    }
}

export const updateMovie = async (movieId, formData) => {
    try {
        return axios.put(`${BASE_URL}/movies/${movieId}`, formData)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const deleteMovie = async (movieId) => {
    try {
        return axios.delete(`${BASE_URL}/movies/${movieId}`)
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const createUser = async (userData) => {
    try {
        return axios.post(`${BASE_URL}/register`, userData)
    } catch (error) {
        console.log(error)
        throw error
        
    }
}

export const loginUser = async (userData) => {
    try {
        return axios.post(`${BASE_URL}/login`, userData)
    } catch (error) {
        console.log(error)
        throw error
    }
}

