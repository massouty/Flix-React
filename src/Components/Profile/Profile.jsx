import React, { useState, useEffect } from 'react';

import axios from 'axios';

import {  Col, Container, Row } from 'react-bootstrap';


import './Profile.scss';

 function Profile(props) {
  const [ user, setUser ] = useState(props.user);

  
 
  const token = localStorage.getItem('token');

  const getUser = () => {
    axios.get(`https://api.themoviedb.org/3/guest_session/{guest_session_id}/rated/movies?api_key=3b885affc5cf1baf5603690472bf4c6e&language=en-US&sort_by=created_at.asc`, {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      setUser(response.data);
    })
    .catch(error => console.error(error))
  }

  useEffect(() => {getUser()})

  
  return (
    <Container id="profile-form">
      <Row><h4>Your profile</h4></Row>
      <Row>
        <Col className="label">Username:</Col>
        <Col className="value">{user.Username}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Password:</Col>
        <Col className="value">******</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Email:</Col>
        <Col className="value">{user.Email}</Col>
        </Row>
        <Row className="mt-3">
        <Col className="label">Birthday:</Col>
        <Col className="value">{user.Birthday}</Col>
        </Row>
        
    </Container>
  )
}

export default Profile;