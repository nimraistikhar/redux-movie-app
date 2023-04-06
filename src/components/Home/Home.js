import React, {useEffect} from 'react'
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {

  useEffect(() => {
    const fetchMovie = async = () => {
      const response = await movieApi.get(`?`)
    };
  });
  

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  )
}

export default Home