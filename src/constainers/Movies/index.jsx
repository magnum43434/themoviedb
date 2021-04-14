import React, { useEffect, useState, useReducer } from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions'
import Movie from '../../components/Movie'
import './style.scss'

function reducer(page, action) {
    switch (action.type) {
        case 'next':
            return page + 1
        case 'back':
            return page > 1 ? page - 1 : page
        case 'reset':
            return page = 1
        default:
            return page
    }
}

function Movies({ fetchMovies, movies }) {
    const [searchCat, setSearchCat] = useState()
    const [moviePage, Dispatch] = useReducer(reducer, 1)

    useEffect(() => {
        fetchMovies(searchCat, moviePage)
    }, [searchCat])

    useEffect(() => {
        fetchMovies(searchCat, moviePage)
    }, [moviePage])

    function ChangeSearchCat(e) {
        Dispatch({ type: 'reset' })
        setSearchCat(e.target.value)
    }
    useEffect(() => {
        const movieListEl = document.querySelector('#movieList')
        movieListEl.scrollTo(0, 0)
    }, [moviePage])

    return (
        <div className="container">
            <div className="row">
                <h1>Movies</h1>
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-primary" value="popular" onClick={e => ChangeSearchCat(e)}>Popular</button>
                    <button type="button" className="btn btn-primary" value="top_rated" onClick={e => ChangeSearchCat(e)}>Top rated</button>
                    <button type="button" className="btn btn-primary" value="now_playing" onClick={e => ChangeSearchCat(e)}>Now playing</button>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div id="movieList" className="row row-cols-4 justify-content-center movielist">
                    {movies.map(m => {
                        return (
                            <Movie movie={m} key={m.id} />
                        )
                    })}
                </div>
            </div>
            <div className="row mt-3">
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'back' })}>Back page</button>
                    <h5 className="m-2">Page: {moviePage}</h5>
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'next' })}>Next page</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { fetchMovies })(Movies)
