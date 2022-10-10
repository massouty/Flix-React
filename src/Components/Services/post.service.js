
import axios from "axios";
import authHeader from "./auth.header";

const API_URL="/posts";

const getAllpublicPosts =()=>{ return axios.get(API_URL+"/public");};

const getAllprivatePosts =()=>{ return axios.get(API_URL+"/private",{headers : authHeader()});};

const PostService = {
    getAllpublicPosts,
    getAllprivatePosts,

};

export default PostService;
