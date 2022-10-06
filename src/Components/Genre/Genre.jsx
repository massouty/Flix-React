import React,{useEffect,useState} from 'react';

import { Button, Col, Container, Row } from 'react-bootstrap';

import './Genre.scss';

const API_GENRE="https://api.themoviedb.org/3/genre/movie/list?api_key=3b885affc5cf1baf5603690472bf4c6e&language=en-US"

function Genre () {

     const [genres,setGenres] = useState([]);
    
     useEffect((token)=>{
    fetch(API_GENRE,{headers: { Authorization: `Bearer ${token}`}})
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setGenres(data.genres);
    })
   },[]);

    
    const { genre, onBackClick } = this.props;

    return (
      <Container>
        {genres.map((genre)=>
      <Genre key={genre.id}{...genre}/>)}
      <Row>
          <Col className="label">GenreId: </Col>
          <Col className="value">{genre.Genre.ID}</Col>
        </Row>
        <Row>
          <Col className="label">Genre: </Col>
          <Col className="value">{genre.Genre.Name}</Col>
        </Row>

        <Button className="d-block mt-3" onClick={() => { onBackClick(null); }} variant="warning">Back</Button>
      </Container>
    )
  }

  export default Genre;