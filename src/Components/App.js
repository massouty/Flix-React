/* eslint-disable react/jsx-no-comment-textnodes */

import React ,{useEffect, useState} from  "react";
import MovieBox from "./MovieBox/MovieBox";
import './App.css';
import {Navbar} from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3b885affc5cf1baf5603690472bf4c6e";

function App() {
    const [movies,setMovies] = useState([]);
   useEffect(()=>{
    fetch(API_URL)
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setMovies(data.results);
    })
   },[])

  return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark">
    <div className="container">
     <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
     </div>
    </div>



    </Navbar>
    </>
  );
   
}

export default App;
