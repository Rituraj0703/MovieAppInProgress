import React from "react";
import Header from "../common/header/Header";
import UpcomingMovies from "../common/upcomingmovies/UpcomingMovies";
import SingleLineGridList from "../common/movielist/SingleLineGridList";
import NewReleases from "../common/newreleases/NewReleases";
import FindMovies from "../common/findmovies/FindMovies";
import "./Controller.css"


function Controller() {
    return (
        <div>
            <div>
                <Header />

            </div>
            <div>
                <UpcomingMovies />

            </div>
            <div>
                <SingleLineGridList />
            </div>

            <div class="flex-container">
                <div class="one">
                    <NewReleases />
                </div>
                <div class="two">
                    <FindMovies />
                </div>
            </div>
           

        </div>

    );
}


export default Controller;