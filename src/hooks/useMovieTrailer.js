import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const Dispatch = useDispatch();
  //fetch video background && updating the store
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log("videoResults", json);
    const filterData = json.results.filter((video) => video.type === "Trailer");
    console.log("filteredResults", filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("trailer", trailer);
    Dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
