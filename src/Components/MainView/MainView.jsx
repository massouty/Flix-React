/* eslint-disable no-unused-vars */


import React ,{useEffect, useState} from  "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { setMovies } from '../Action/Action';
import axios from "axios";
import {MovieView} from "../MovieView/MovieView";
import './MainView.scss';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import Register from '../Register/Register';
import GenreView from "../GenreView/GenreView";
import { DirectorView } from "../DirectorView/DirectorView";
import MovieCard from "../MovieCard/MovieCard";


class MainView extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      console.log("called setUser");
      this.props.setUser(localStorage.getItem("user"));
      this.getMovies(accessToken);
    }
  }

  onLoggedIn(authData) {
    this.props.setUser(authData.user.Username);
    localStorage.setItem("token", authData.token);
    localStorage.setItem("user", authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios
      .get("https://myflixdbapi.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        this.props.setMovies(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  onUpdatedUser(newUserInfo) {
    const { userName, newPassword, email } = newUserInfo;
    axios
      .put(`https://myflixdbapi.herokuapp.com/users/${localStorage.getItem("user")}`,
        {
          Username: userName,
          Password: newPassword,
          Email: email,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }

  onLoggedOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.props.setUser(null);
  }
 render = ()=>{
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
    
return (

 <Router>

    <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>

            <Navbar.Brand href='/MainView' >Home</Navbar.Brand>
            <Navbar.Brand href='/Login' >Login</Navbar.Brand>
             <Navbar.Brand href='/Register'>Register</Navbar.Brand>
             <Navbar.Brand href='/GenreView'>GenreView</Navbar.Brand>
             <Navbar.Brand href='/DirectorView'>DirectorView</Navbar.Brand>
             <Navbar.Brand href='/MovieCard'>MovieCard</Navbar.Brand>
             <Navbar.Brand href='/MovieView'>MovieView</Navbar.Brand>



             <Navbar.Toggle  aria-controls='navbarScroll' ></Navbar.Toggle>
                <Navbar.Collapse  id="navbarScroll">
                <Nav  className="me-auto my=2 my=lg=3" style={{maxHeight:'400px'}} navbarScroll> 
                </Nav>
 </Navbar.Collapse>    
    
</Container>
    </Navbar>

            <Switch>
              <Route exact path ="/Login" component={Login}/>
              <Route exact path ="/Profile" component={()=><Profile authorized={true}/>}/>
              </Switch>
               <Switch>
              <Route exact path ="/Register" component={Register}/>
              </Switch>

              <Switch>
              <Route exact path="/GenreView" component={GenreView} />
              </Switch>
           
              <Switch>
              <Route exact path="/DirectorView" component={DirectorView} />
            </Switch>
            <Switch>
              <Route exact path="/MovieCard" component={MovieCard} />
            </Switch>

            <Switch>
              <Route exact path="/MovieView" component={MovieView} />
            </Switch>

     <div className="container">
     <div className="grid">
      {movies.map((movieReq)=>
      <MovieView key={movieReq.id}{...movieReq}/>
      )}
     </div>
     </div>
    </Router>

);
      }
      };
      


let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies } )(MainView);