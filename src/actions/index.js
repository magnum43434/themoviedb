import themoviedb from '../api/themoviedb'

export const selectMovie = (movie) => {
    // Return an action
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    };
};

export const selectTvShow = (tvShow) => {
    // Return an action
    return {
        type: 'TVSHOW_SELECTED',
        payload: tvShow
    };
};

export const setSearchQuery = (query) => {
    return {
        type: 'SEARCH_QUERY',
        payload: query
    }
}

export const fetchMovies = (state = "popular", page = 1) => async dispatch => {
    let res;
    switch (state) {
        case "popular":
            res = await themoviedb.get(`/movie/${state}?language=en-US&page=${page}`)
            break;
        case "top_rated":
            res = await themoviedb.get(`/movie/${state}?language=en-US&page=${page}`)
            break;
        case "now_playing":
            res = await themoviedb.get(`/movie/${state}?language=en-US&page=${page}`)
            break;

        default:
            break;
    }
    dispatch({ type: "FETCH_MOVIES", payload: res.data.results })
}

export const fetchTvShows = (state = "popular", page = 1) => async dispatch => {
    let res;
    switch (state) {
        case "popular":
            res = await themoviedb.get(`/tv/${state}?language=en-US&page=${page}`)
            break;
        case "top_rated":
            res = await themoviedb.get(`/tv/${state}?language=en-US&page=${page}`)
            break;
        case "on_the_air":
            res = await themoviedb.get(`/tv/${state}?language=en-US&page=${page}`)
            break;

        default:
            break;
    }
    dispatch({ type: "FETCH_TVSHOWS", payload: res.data.results })
}