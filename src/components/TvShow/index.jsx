import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectTvShow } from '../../actions'

function TvShow({ tvshow, selectTvShow }) {
    return (
        <div className="card m-1" style={{ width: "18rem" }}>
            <img src={`https://image.tmdb.org/t/p/original${tvshow.poster_path}`} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title"><strong>{tvshow.name}</strong></h5>
                <p className="card-text">{tvshow.overview}</p>

            </div>
            <div className="card-footer">
                <Link to={`/Tv-Shows/${tvshow.id}`}>
                    <button className="btn btn-primary" onClick={() => selectTvShow(tvshow)}>Learn more ...</button>
                </Link>
            </div>
        </div>
    )
}

export default connect(null, { selectTvShow })(TvShow);