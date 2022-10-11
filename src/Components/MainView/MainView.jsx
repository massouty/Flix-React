/* eslint-disable no-unused-vars */


import React ,{useEffect, useState} from  "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { setMovies } from '../Action/Action';
import { Link } from "react-router-dom";
import MovieBox from "../MovieBox/MovieBox";
import './MainView.scss';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import Private from "../Private";
import Signup from '../Signup/Signup';
import GenreView from "../GenreView/GenreView";
import AuthService from "../Services/auth.service";
import Home from "../Home";


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3b885affc5cf1baf5603690472bf4c6e";
const API_SURCH ="https://api.themoviedb.org/3/search/movie?api_key=3b885affc5cf1baf5603690472bf4c6e&query";
function MainView() {
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');
    const [genres]=useState([]);
    const [currentUser,setCurrentUser]=useState(undefined);
    const [Logout]=useState(null);
    
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

const changeHandler=(e)=>{
    setQuery(e.target.value);};

useEffect(()=>{

const user = AuthService.getCurrentUser();

    if (user){
        setCurrentUser(user);
    }

const logout = ()=>{
    AuthService.logout();
};
},[])
    
return (
    <Router>
    <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>
            <Navbar.Brand href='/MainView' >Home</Navbar.Brand>
            <Navbar.Brand href='/Login' >Login</Navbar.Brand>
             <Navbar.Brand href='/Signup'>Sign up</Navbar.Brand>
             <Navbar.Brand href='/GenreView'>GenreView</Navbar.Brand>
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
 <div className="navbar-nav mr-auto">
         <li className="nav-item">
        <Link to={"/Home"} className="nav-link">Home</Link>
        <Link to={"/GenreView"} className="nav-link">GenreView</Link>
     </li>
  
    {currentUser && (
     
        <li className="nav-item">
        <Link to={"/Private"} className="nav-link">Private</Link>
    </li>
  
    )}
</div>

{currentUser ? (
<div className ="navbar-nav mr-auto">
         <li className ="nav-item">
        <a href={"/Login"} className="nav-link" onClick={Logout}>Logout
        </a>
     </li>
    </div>
): (
    <div className="navbar-nav mr-auto">
         <li className="nav-item">
        <Link to={"/Login"} className="nav-link">Login</Link>
     </li>

     <li className="nav-item">
        <Link to={"/Signup"} className="nav-link">Signup</Link>
     </li>
     </div>
)}

    <Route exact path="/Home" component={Home}/>
     <Route exact path="/Private" component={Private}/>
     <Route exact path="/Login" component={Login}/>
     <Route exact path="/Signup" component={Signup}/>
     <Route exact path="/GenreView" component={GenreView}/>
     

     



     <div className="container">
     <div className="grid">
      {movies.map((movieReq)=>
      <MovieBox key={movieReq.id}{...movieReq}/>
      )}

       
     </div>
     </div>
 
    </Router>
);
};

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);