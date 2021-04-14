import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectMovie, selectTvShow } from '../../actions'


function SearchResult({ result, selectMovie, selectTvShow }) {

    if (result.title) {
        return (
            <div className="card m-1" style={{ maxWidth: "15rem" }}>
                <img src={result.poster_path ? `https://image.tmdb.org/t/p/original/${result.poster_path}` : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} className="card-img-top mt-2" alt="" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{result.title}</strong></h5>
                    <p className="card-text">{result.overview.length > 180 ? `${result.overview.slice(0, 180)}...` : result.overview}</p>

                </div>
                <div className="card-footer">
                    <Link to={`/Movies/${result.id}`}>
                        <button className="btn btn-primary" onClick={() => selectMovie(result)}>Learn more ...</button>
                    </Link>
                </div>
            </div>
        )
    } else if (result.name) {
        return (
            <div className="card m-1" style={{ maxWidth: "15rem" }}>
                <img src={result.poster_path ? `https://image.tmdb.org/t/p/original/${result.poster_path}` : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} className="card-img-top mt-2" alt="" />
                <div className="card-body">
                    <h5 className="card-title"><strong>{result.name}</strong></h5>
                    <p className="card-text">{result.overview.length > 180 ? `${result.overview.slice(0, 180)}...` : result.overview}</p>

                </div>
                <div className="card-footer">
                    <Link to={`/Tv-Shows/${result.id}`}>
                        <button className="btn btn-primary" onClick={() => selectTvShow(result)}>Learn more ...</button>
                    </Link>
                </div>
            </div>
        )
    } else { return null }
}

export default connect(null, { selectMovie, selectTvShow })(SearchResult);