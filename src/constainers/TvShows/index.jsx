import React, { useEffect, useState, useReducer } from 'react'
import { connect } from 'react-redux'
import TvShow from '../../components/TvShow'
import { fetchTvShows } from '../../actions'

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

function TvShows({ tvshows, fetchTvShows }) {
    const [searchCat, setSearchCat] = useState()
    const [tvShowsPage, Dispatch] = useReducer(reducer, 1)

    useEffect(() => {
        fetchTvShows(searchCat, tvShowsPage)
    }, [searchCat])

    useEffect(() => {
        fetchTvShows(searchCat, tvShowsPage)
    }, [tvShowsPage])

    function ChangeSearchCat(e) {
        Dispatch({ type: 'reset' })
        setSearchCat(e.target.value)
    }

    return (
        <div className="container">
            <div className="row">
                <h1>Tv shows</h1>
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-primary" value="popular" onClick={e => ChangeSearchCat(e)}>Popular</button>
                    <button type="button" className="btn btn-primary" value="top_rated" onClick={e => ChangeSearchCat(e)}>Top rated</button>
                    <button type="button" className="btn btn-primary" value="on_the_air" onClick={e => ChangeSearchCat(e)}>On the air</button>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="d-flex flex-wrap movielist">
                    {tvshows.map(ts => {
                        return (
                            <TvShow tvshow={ts} key={ts.id} />
                        )
                    })}
                </div>
            </div>
            <div className="row mt-3">
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'back' })}>Back page</button>
                    <h5 className="m-2">Page: {tvShowsPage}</h5>
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'next' })}>Next page</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { tvshows: state.tvshows }
}

export default connect(mapStateToProps, { fetchTvShows })(TvShows)
