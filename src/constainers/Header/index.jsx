import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

export default function Header() {
    return (
        <div className="header">
            <div>
                <Link to="/">
                    <img style={{ width: "300px" }} src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                </Link>
            </div>
            <div>
                <ul className="nav">
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
            </div>
        </div>
    )
}
