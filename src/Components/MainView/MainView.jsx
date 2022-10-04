/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

import React ,{useEffect, useState,Redirect} from  "react";
import {Navbar,Container,Nav,Form,FormControl,Button,Row,Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieBox from "../MovieBox/MovieBox";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NavView from "../NavView/NavView";
import GenreView from "../GenreView/GenreView";
import Profile from "../Profile/Profile";
import Trending from "../Trending/Trending";

import './MainView.scss';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=3b885affc5cf1baf5603690472bf4c6e";
const API_SURCH ="https://api.themoviedb.org/3/search/movie?api_key=3b885affc5cf1baf5603690472bf4c6e&query";
function MainView() {
    const [movies,setMovies] = useState([]);
    const [query,setQuery] = useState('');
      let {user}=this.state;

   useEffect((token)=>{
    fetch(API_URL,{headers: { Authorization: `Bearer ${token}`}})
    .then((resp)=>resp.json())
    .then (data=> {
        console.log(data);
        setMovies(data.results);
    })
   },[]);

  const componentDidMount=()=> {
  let accessToken = localStorage.getItem('token');
  if (accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.useEffect(accessToken);
  }
};

  const onLoggedIn=(authData)=> {
  console.log(authData);
  this.setState({
    user: authData.user.Username
  });

  localStorage.setItem('token', authData.token);
  localStorage.setItem('user', authData.user.Username);
  this.useEffect(authData.token);
};

function onLoggedOut(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
    user: null
  });
}

const onRegister=()=>{
    this.setState({
      isRegistered: false
    });
  }

return (
       <Router>

     <div className="container">
     <div className="grid">
     {movies.map((movie)=>
      <MovieBox key={movie.id}{...movie}/>)} 
     </div>
     </div>

 
        <NavView user={user} /> 
        <Row className="MainView justify-content-md-center">
          <Route exact path="/" render={() => {
              if (!user) return <Col>
                <Login onLoggedIn={user => this.onLoggedIn(user)} />
              </Col>
              if (movies.length === 0) return <div className="MainView" />;
              return  
               ;}} />
          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />
            return <Col>
              <Register />
            </Col>
          }} />
    <Route path="/movies/:id" render={({ match, history }) => {
       if (!user) return <Col>
       <Login onLoggedIn={user => this.onLoggedIn(user)} />
     </Col>
     if (movies.length === 0) return <div className="MainView" />;
     return <Col md={8}>
        <MovieBox movie={movies.find(m => m._id === match.params.id)} onBackClick={() => history.goBack()} />
      </Col>
    }} />
    <Route path="/Trending/:id" render={({ match, history}) => {
      if (!user) return <Col>
      <Login onLoggedIn={user => this.onLoggedIn(user)} />
    </Col>
    if (movies.length === 0) return <div className="MainView" />;
    return <Col md={8}>
      <Trending movie={movies.find(m => m._id === match.params.id )} onBackClick={() => history.goBack()}/>
      </Col>
    }} />
    <Route path="/genres/:name" render={({ match, history}) => {
      if (!user) return <Col>
      <Login onLoggedIn={user => this.onLoggedIn(user)} />
    </Col>
    if (movies.length === 0) return <div className="MainView" />;
    return <Col md={8}>
      <GenreView genre={movies.find(m => m.Genre.Name === match.params.name )} onBackClick={() => history.goBack()}/>
      </Col>
    }} />
    <Route path={`/users/${user}`} render={({ history}) => {
       if (!user) return <Col>
       <Login onLoggedIn={user => this.onLoggedIn(user)} />
     </Col>
     if (movies.length === 0) return <div className="MainView" />;
     return <Col md={8}>
      <Profile movies={movies} user={user} onBackClick={() => history.goBack()} />
      </Col>
    }} />
  </Row>
</Router>
     
    );
  }


let mapStateToProps = state => {
  return { movies: state.movies }
}


   
 




  


export default MainView;
