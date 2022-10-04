import React,{useEffect,useState} from 'react';

import { Button,Container } from 'react-bootstrap';

import './Trending.scss';

const API_TRENDING="https://api.themoviedb.org/3/trending/all/day?api_key=3b885affc5cf1baf5603690472bf4c6e"
const API_IMG="https://image.tmdb.org/t/p/w500";

function Trending ({id,title,overview,popularity,release_date,poster_path}) {

      const [movies,setMovies] = useState([]);
    
     useEffect((token)=>{
    fetch(API_TRENDING,{headers: { Authorization: `Bearer ${token}`}})
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setMovies(data.results);
    })
   },[]);

    
    const {onBackClick } = this.props;

    return (
      <Container>
         <div  className="card-body">
        <img className="card-img-top" src={API_IMG+poster_path} alt=""/>
             <h6>Movie_Id:<br></br>{id}</h6>
            <h1>{title}</h1>
            <h6>Overview:<br></br>{overview}</h6>
            <h6>Popularity:<br></br>{popularity}</h6>
            <h6>Release Date :<br></br>{release_date}</h6>

        <div  className="card-body"></div>
        </div>
       <div className="container">
       <div className="grid">
     {movies.map((movie)=>
      <Trending key={movie.id}{...movie}/>)} 
     </div>
     </div>
      

        <Button className="d-block mt-3" onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
      </Container>
    )
  }

  export default Trending;

