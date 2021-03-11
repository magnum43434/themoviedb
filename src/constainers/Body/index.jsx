import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import MovieDetail from '../MovieDetail';
import TvShowDetail from '../TvShowDetail';
import Movies from '../Movies';
import TvShows from '../TvShows';

export default function Body() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Movies" component={Movies} />
                <Route exact path="/Tv-Shows" component={TvShows} />
                <Route path="/Movies/:ID" component={MovieDetail} />
                <Route path="/Tv-Shows/:ID" component={TvShowDetail} />
            </Switch>
        </div>
    )
}
