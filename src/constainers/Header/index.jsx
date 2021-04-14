import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { setSearchQuery } from '../../actions'
import './style.scss'

function Header({ setSearchQuery }) {
    const [searchQueryStr, setSearchQueryStr] = useState("")
    const history = useHistory()

    function search(e) {
        if (searchQueryStr === "") return
        e.preventDefault()
        setSearchQuery(searchQueryStr)
        setSearchQueryStr("")
        history.push("/SearchResults")
    }

    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-dark w-100">
                <div className="container-fluid">
                    <Link to="/">
                        <img style={{ width: "300px" }} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Movies'>Movies</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to='/Tv-Shows'>Tv Shows</Link>
                            </li>
                        </ul>
                        <form className="input-group d-flex" style={{ maxWidth: "18rem" }}>
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={searchQueryStr} onChange={(e) => setSearchQueryStr(e.target.value)} />
                            <button className="btn btn-primary" type="submit" onClick={(e) => search(e)}><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default connect(null, { setSearchQuery })(Header);