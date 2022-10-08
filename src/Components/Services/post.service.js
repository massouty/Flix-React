import axios from "axios";

const API_URL="/posts";

const getAllpublicPosts =()=>{ return axios.get(API_URL+"/public");};

const getAllprivatePosts =()=>{ return axios.get(API_URL+"/private",{headers : authHeader()});};

const postService = {
    getAllpublicPosts,
    getAllprivatePosts,

};

export default postService;
