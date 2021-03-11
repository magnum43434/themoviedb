export const selectedMovieReducer = (selectedMovie = null, action) => {
    if (action.type === 'MOVIE_SELECTED') {
        return action.payload;
    }

    return selectedMovie;
}