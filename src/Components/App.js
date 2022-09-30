/* eslint-disable react/jsx-no-comment-textnodes */

import React ,{useEffect, useState} from  "react";
import MovieBox from "./MovieBox/MovieBox";
import './App.css';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';


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
        
        <Container fluid>
            <Navbar.Brand href='' >Login</Navbar.Brand>
             <Navbar.Brand href=''>Register</Navbar.Brand>
             <Navbar.Toggle  aria-controls='navbarScroll'>
                <Navbar.Collapse  id="navbarScroll">
                <Nav  className="me-auto my=2 my=lg=3" style={{maxHeight:'400px'}} navbarScroll>
                    
                </Nav>
 </Navbar.Collapse>
</Navbar.Toggle>
</Container>
    </Navbar>
    <Form className="d-flex bg=primary">
                <FormControl type="search" placeholder="Movie Search"
                className="me-2" aria-label="search"
                name=""></FormControl>
                <Button variant="primary" type="submit">Search</Button>

             </Form>
 
     <div className="container">
     <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>)}
     </div>
     </div>
    </>
  );
}

export default App;
