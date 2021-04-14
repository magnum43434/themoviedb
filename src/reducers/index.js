import { combineReducers } from 'redux';
import { moviesReducer } from '../constainers/Movies/reducer'
import { tvShowsReducer } from '../constainers/TvShows/reducer'
import { selectedMovieReducer } from '../components/Movie/reducer'
import { selectedTvShowReducer } from '../components/TvShow/reducer'
import { searchQueryReducer } from '../constainers/SearchResults/reducer';

export default combineReducers({
    movies: moviesReducer,
    tvshows: tvShowsReducer,
    selectedMovie: selectedMovieReducer,
    selectedTvShow: selectedTvShowReducer,
    searchQuery: searchQueryReducer
});