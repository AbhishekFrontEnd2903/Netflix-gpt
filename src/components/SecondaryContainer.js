import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("nowPLaying", movies.nowPlayingMovies);
  console.log("popularmovies", movies.popularMovies);
  console.log("toprated", movies.topRatedMovies);
  return (
    movies.nowPlayingMovies && (
      <div className="-mt-28 relative z-20 bg-black">
        <div className="-mt-28 relative pl-12 z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
