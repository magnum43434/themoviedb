import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import themoviedb from '../../api/themoviedb';

function TvShowDetail({ tvshow }) {
    const [tvShowUrl, setTvShowUrl] = useState()
    const [selTvShow, setSelTvShow] = useState(tvshow)

    useEffect(() => {
        const fetchData = async () => {
            if (selTvShow === null) {
                let pathname = window.location.pathname.split('/')
                const res = await themoviedb.get(`tv/${pathname[pathname.length - 1]}?language=en-US`)
                setSelTvShow(res.data)
            } else {
                const res = await themoviedb.get(`tv/${selTvShow.id}/videos?language=en-US`)
                const res2 = res.data.results.filter(m => m.type === "Trailer")
                setTvShowUrl(`https://www.youtube.com/embed/${res2[0].key}`)
            }
        }
        fetchData()
    }, [selTvShow])

    if (selTvShow) {
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="row">
                            <div className="col">
                                <h4><strong>Tv show infomation</strong></h4>
                            </div>
                            <div className="col">
                                <Link to="/Tv-Shows">
                                    <button className="btn btn-primary">Back</button>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        <h5><strong>Name: </strong>{selTvShow.name}</h5>
                        <h5><strong>Original name: </strong>{selTvShow.original_name}</h5>
                        <h5><strong>Release date: </strong>{new Date(selTvShow.first_air_date).toLocaleDateString('da-dk')}</h5>
                        <h5><strong>Original language: </strong>{selTvShow.original_language}</h5>
                        <h5><strong>Origin Country: </strong>{selTvShow.origin_country[0]}</h5>
                        <h5><strong>Vote average: </strong>{selTvShow.vote_average}</h5>
                        <h5><strong>Pularity: </strong>{selTvShow.popularity}</h5>
                        <h5><strong>Overview: </strong><div style={{ overflow: "auto", maxHeight: "9rem" }}>{selTvShow.overview}</div></h5>
                    </div>
                    <div className="col-4 justify-content-center">
                        <h4><strong>Tv show poster</strong></h4>
                        <img src={`https://image.tmdb.org/t/p/original${selTvShow.poster_path}`} alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h4>Tv show trailer</h4>
                        <div dangerouslySetInnerHTML={{ __html: `<iframe width="500" height="300" src=${tvShowUrl} />` }} />

                    </div>
                </div>

            </div>
        )
    }
    else { return null }
}

const mapStateToProps = (state) => {
    return { tvshow: state.selectedTvShow }
}

export default connect(mapStateToProps)(TvShowDetail);