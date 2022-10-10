import React,{useState} from 'react';
import { useNavigate } from 'react';
import AuthService from "../Services/auth.service";

const Login =()=>{
    const[email,setEmail]= useState("");
    const [password,setPassword]= useState("");

const navigate = useNavigate();
const handleLogin = async (e)=>{
    e.preventDefault();
    try {
        await AuthService.Login(email,password).then (
            ()=>{
                navigate("/home");
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
        <form  onSubmit={handleLogin}>
            <h3>Log in</h3>
            <input  
              type="text"
              placeholder='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <input  
              type="text"
              placeholder='password'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit">Log in</button>
        </form>
    </div>
   );
    };

    export default Login;





