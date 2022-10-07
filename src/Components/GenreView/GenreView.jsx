import React,{useEffect,useState} from 'react';


import './GenreView.scss';

const API_GENRE="https://api.themoviedb.org/3/genre/movie/list?api_key=3b885affc5cf1baf5603690472bf4c6e&language=en-US"

function GenreView ({id,name}) {

     const [genres,setGenres] = useState([]);

     useEffect(()=>{
    fetch(API_GENRE)
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setGenres(data.genres);
    })
   },[]);


    return (
       <div className="card text- center bg-secondary mb.3">
            {genres.map((genreReq)=>
      <GenreView key={genreReq.id}{...genreReq}/>
      )}
        <h1>Genre_ID: <bar></bar>{id}</h1>
        <h1>Genre Name:<br></br>{name}</h1>
         </div>
    )
  }

  export default GenreView;