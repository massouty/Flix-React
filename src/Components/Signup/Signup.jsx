import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AuthService from '../Services/auth.service';
import {useNavigate} from "react";
import './Signup.scss';


 const Signup = (props)=> {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');

    const navigate = useNavigate();

    const handleSignup= async (e)=>{
    e.preventDefault();
    try {
        await AuthService.signup(username,password,email,birthday).then (
            (response)=>{
              console.log("Sign up successflly",response);
              navigate('/home');
               window.location.reload();
            },
            (error)=>{
                console.log(error);
            }
        );
    } catch (error){
        console.log(error);
    }
   };

   return (
    <div>
        <form  onSubmit={handleSignup}>
            <h3>Sign up</h3>
            <input  
              type="text"
              placeholder='username'
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <input  
              type="text"
              placeholder='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
             <input  
              type="text"
              placeholder='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input  
              type="text"
              placeholder='birthday'
              value={email}
              onChange={(e)=>setBirthday(e.target.value)}
            />
            <button type="submit">Sign up</button>
        </form>
    </div>
   );
    };

Signup.propTypes = {
    onRegistration: PropTypes.func.isRequired,
};


export default Signup;
