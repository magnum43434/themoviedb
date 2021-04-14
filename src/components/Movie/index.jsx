import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { selectMovie } from '../../actions'

function Movie({ movie = null, selectMovie }) {
    return (
        <div className="card m-1" style={{ maxWidth: "15rem" }}>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : `https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} className="card-img-top mt-2" alt="" />
            <div className="card-body">
                <h5 className="card-title"><strong>{movie.title}</strong></h5>
                <p className="card-text">{movie.overview.length > 180 ? `${movie.overview.slice(0, 180)}...` : movie.overview}</p>

            </div>
            <div className="card-footer">
                <Link to={`/Movies/${movie.id}`}>
                    <button className="btn btn-primary" onClick={() => selectMovie(movie)}>Learn more ...</button>
                </Link>
            </div>
        </div>
    )
}

export default connect(null, { selectMovie })(Movie);