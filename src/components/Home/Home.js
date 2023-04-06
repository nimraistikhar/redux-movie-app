import React, {useEffect} from 'react'
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/apis/movieApi";
// import {APIKey} from "../../common/apis/MovieApiKey";

const Home = () => {

  useEffect(() => {
    // const movieText = "Harry";
    // const fetchMovie = async () => {
    //   const response = await movieApi
    //   .get(`?apiKey=${APIKey}&s=${movieText}&type`)
    //   .catch((err)=> {
    //     console.log("Err :", err)
    //   });
    //   console.log("The response from API", response);
    // };

    // fetchMovie();
  },[]);
  
  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}

export default Home