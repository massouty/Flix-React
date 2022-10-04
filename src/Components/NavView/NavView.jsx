import React,{useState,props} from 'react';
import {Navbar,Container,Nav,Form,FormControl,Button} from 'react-bootstrap';



function NavView (){
     let user = localStorage.getItem("user");

        const [setMovies] = useState([]);
         const [query,setQuery] = useState('');
         //how define props?

         function handleLogOut (e) {
    e.preventDefault();
    localStorage.clear();
    window.open("/", "_self");
   props.onLoggedOut(user);
  };

  const isAuth = () => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    } else {
      return false;
    }
  };

        const searchMovie = async(e)=>{e.preventDefault();
    console.log("Searching");
try{
    // eslint-disable-next-line no-template-curly-in-string
    const url= "https://api.themoviedb.org/3/search/movie?api_key=3b885affc5cf1baf5603690472bf4c6e&query=${query}";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    setMovies(data.results);
}catch(e){
console.log(e);
}
}

const changeHandler=(e)=>{
    setQuery(e.target.value);}


        return(
             <>
    <Navbar bg="dark" expand="lg" variant="dark" >
        <Container fluid>
            <Navbar.Brand href="/">Movies</Navbar.Brand>
             {isAuth() && (
              <Nav.Link href={`/users/${user}`}>{user}</Nav.Link>
            )}
             {isAuth() && (
              <Button variant="link" onClick={handleLogOut}>Logout</Button>
            )}
            {!isAuth() && (
              <Nav.Link href="/">Login</Nav.Link>
            )}
            {!isAuth() && (
              <Nav.Link href="/register">Register</Nav.Link>
            )}
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

         </>

        )

    }


export default NavView;