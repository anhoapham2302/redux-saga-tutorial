import { FETCH_MOVIES, FETCH_SUCCEEDED } from "./types"

export const fetchMoviesAction = () => {
    return {
        type: FETCH_MOVIES,
    }
}

export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_SUCCEEDED,
        error
    }
}