import { useEffect, useState, useReducer } from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SearchResult from '../../components/SearchResult';
import themoviedb from '../../api/themoviedb'

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

function SearchResults({ search }) {
    const history = useHistory()
    if (search === "") { history.push("/") }
    const [results, setResults] = useState([])
    const [Page, Dispatch] = useReducer(reducer, 1)

    useEffect(() => {
        if (search === "") return
        const fetchData = async () => {
            const resTv = await themoviedb.get(`/search/tv?query=${search}&page=${Page}`)
            const resMovie = await themoviedb.get(`/search/movie?query=${search}&page=${Page}`)
            const arr = [...resTv.data.results, ...resMovie.data.results].sort((a, b) => { return a.id - b.id || a.name.localeCompare(b.name); })
            setResults(arr)
        }
        fetchData()
        return () => { setResults([]) }
    }, [search, Page])

    useEffect(() => {
        const resultListEl = document.querySelector('#resultList')
        resultListEl.scrollTo(0, 0)
    }, [Page])

    return (
        <div className="container">
            <h1>Search results</h1>
            <div className="row justify-content-center mt-3">
                <div id="resultList" className="row row-cols-4 justify-content-center movielist">
                    {results.map(r => {
                        return (
                            <SearchResult key={r.id} result={r} />
                        )
                    })}
                </div>
            </div>
            <div className="row mt-3">
                <div className="btn-group" role="group" >
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'back' })}>Back page</button>
                    <h5 className="m-2">Page: {Page}</h5>
                    <button type="button" className="btn btn-primary" onClick={() => Dispatch({ type: 'next' })}>Next page</button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return { search: state.searchQuery }
}

export default connect(mapStateToProps)(SearchResults);