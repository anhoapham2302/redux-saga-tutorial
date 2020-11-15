import { FETCH_FAILED, FETCH_SUCCEEDED } from "../actions/types";

export const movieReducer = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    default:
      return movies;
  }
};
