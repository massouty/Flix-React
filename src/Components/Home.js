import React, {useState,useEffect} from "react";

import postService from "./Services/post.service";

const Home = ()=>{
    const [posts,setPosts]=useState([]);
useEffect(()=>{
    postService.getAllpublicPosts().then(
        (response)=>{setPosts(response.data);
        },
        (error)=>{
            console.log(error);
        }
    );
    },[]);

    return (
        <div>
            <h3>
            {posts.map((post)=>
            (<div>{post.content}</div>
            ))}
           </h3>

        </div>
    );

};

export default Home;

