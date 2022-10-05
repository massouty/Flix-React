/* eslint-disable no-unused-vars */


import React ,{useEffect, useState} from  "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MovieBox from "../MovieBox/MovieBox";
import './MainView.scss';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import Register from '../Register/Register';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3b885affc5cf1baf5603690472bf4c6e";
const API_SURCH ="https://api.themoviedb.org/3/search/movie?api_key=3b885affc5cf1baf5603690472bf4c6e&query";
function MainView() {
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');
    
   useEffect(()=>{
    fetch(API_URL)
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setMovies(data.results);
    })
   },[])





   const searchMovie = async(e)=>{e.preventDefault();
    console.log("Searching");
try{
    // eslint-disable-next-line no-template-curly-in-string
    let url= "https://api.themoviedb.org/3/search/movie?api_key=3b885affc5cf1baf5603690472bf4c6e&query=${query}";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    setMovies(data.results);
}catch(e){
console.log(e);
}
}

 const render=()=>{
    return(
        <Router>
            <switch>
              <Route exact path ="/Login" component={Login}/>
              <Route exact path ="/Profile" component={()=><Profile authorized={true}/>}/>
              </switch>
              </Router> 
    )
};

const changeHandler=(e)=>{
    setQuery(e.target.value);};

   

useEffect(()=>{
 const setIsRegistering = (status)=> {this.setState({isRegistering: status})};

  const onLoggedIn = (user)=>{ this.setState({user});};

  const logOut = ()=>{this.setState({selectedMovie: null,user: null,});};
const render = ()=>{
    const { movies, selectedMovie, user } = this.state;

    if (!user)
      if (!this.state.isRegistering) {
        return (
          <Login
            onLoggedIn={(user) => this.onLoggedIn(user)}
            onRegisterClick={(status) => this.setIsRegistering(status)}
          />
        );
      } else {
        return (
          <Register
            onRegisterClick={(status) => this.setIsRegistering(status)}
          />
        );
      }
    };
})


return (
    <>
    <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>

            <Navbar.Brand href='/MainView' >Home</Navbar.Brand>
            <Navbar.Brand href='/Login' >Login</Navbar.Brand>
             <Navbar.Brand href='/Register'>Register</Navbar.Brand>
             <Navbar.Toggle  aria-controls='navbarScroll' ></Navbar.Toggle>
                <Navbar.Collapse  id="navbarScroll">
                <Nav  className="me-auto my=2 my=lg=3" style={{maxHeight:'400px'}} navbarScroll> 
                </Nav>
 </Navbar.Collapse>    
    
</Container>
    </Navbar>
    <Form className="d-flex bg=primary" onSubmit={searchMovie}>
                <FormControl type="search" placeholder="Movie Search"
                className="me-2" aria-label="search"
                name="query" value={query} onChange={changeHandler}></FormControl>
                <Button variant="primary" type="submit">Search</Button>

             </Form>
              
     <div className="container">
     <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>
      )}
     </div>
     </div>
     
    </>
);
}

export default MainView;