import React,{useState,useEffect} from "react";
import PostService from "./Services/post.service";
import AuthService from "./Services/auth.service";
import {useNavigate} from "react";

const Private =()=>{
    const [privatePosts,setPrivatePosts]=useState([]);
    const navigate = useNavigate();

    useEffect (()=>{
        PostService.getAllprivatePosts().then((response)=>{
            setPrivatePosts(response.data)
        },
        (error)=>{
            console.log('Private page',error.response);
            if (error.response && error.response.status===403)
            {
                AuthService.logout();
                navigate("/Login");
                window.location.reload();
            }
        }
       
        );
    },[navigate]);
    
    return(
        <div>
            <h3>{privatePosts.map((post)=>post.content)}</h3>
        </div>
);
    };

    export default Private;


