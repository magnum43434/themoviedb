import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import themoviedb from '../../api/themoviedb';

function MovieDetail({ movie }) {
    const [movieUrl, setMovieUrl] = useState()
    const [selMovie, setSelMovie] = useState(movie)

    useEffect(() => {
        const fetchData = async () => {
            if (selMovie === null) {
                let pathname = window.location.pathname.split('/')
                const res = await themoviedb.get(`movie/${pathname[pathname.length - 1]}?language=en-US`)
                setSelMovie(res.data)
            } else {
                const res = await themoviedb.get(`movie/${selMovie.id}/videos?language=en-US`)
                const res2 = res.data.results.filter(m => m.type === "Trailer")
                setMovieUrl(`https://www.youtube.com/embed/${res2[0].key}`)
            }
        }
        fetchData()
    }, [selMovie])

    if (selMovie) {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h4><strong>Movie infomation</strong></h4>
                            </div>
                            <div className="col">
                                <Link to="/Movies">
                                    <button className="btn btn-primary">Back</button>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <h5><strong>Title: </strong>{selMovie.title}</h5>
                        <h5><strong>Original title: </strong>{selMovie.original_title}</h5>
                        <h5><strong>Release date: </strong>{new Date(selMovie.release_date).toLocaleDateString('da-dk')}</h5>
                        <h5><strong>Original language: </strong>{selMovie.original_language}</h5>
                        <h5><strong>Adult: </strong>{selMovie.adult.toString()}</h5>
                        <h5><strong>Vote average: </strong>{selMovie.vote_average}</h5>
                        <h5><strong>Pularity: </strong>{selMovie.popularity}</h5>
                        <h5><strong>Overview: </strong><div style={{ overflow: "auto", maxHeight: "9rem" }}>{selMovie.overview}</div></h5>
                    </div>
                    <div className="col-4 justify-content-center">
                        <h4><strong>Movie poster</strong></h4>
                        <img src={`https://image.tmdb.org/t/p/original${selMovie.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Movie trailer</h4>
                        <div dangerouslySetInnerHTML={{ __html: `<iframe width="500" height="300" src=${movieUrl} />` }} />

                    </div>
                </div>

            </div>
        )
    } else { return null }
}

const mapStateToProps = (state) => {
    return { movie: state.selectedMovie }
}

export default connect(mapStateToProps)(MovieDetail);