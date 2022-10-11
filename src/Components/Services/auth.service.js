import axios from "axios";
const API_URL="/auth";

const signup =(username,password,email,birthday)=>{return axios.post(API_URL+"/signup",{
    username,
    password,
    email,
    birthday,
}).then ((response)=>{if (response.data.accessToken)
    {localStorage.setItem("user",JSON.stringify(response.data));}
    return  response.data;
});
};

const login =(email,password)=>{return axios.post(API_URL+"/login",{
    email,
    password
}).then ((response)=>{if (response.data.accessToken)
    {localStorage.setItem("user",JSON.stringify(response.data));}
    return  response.data;
});
};

const logout=()=>{localStorage.removeItem("user");};

const getCurrentUser=()=>{return JSON.parse(localStorage.getItem("user"));};

const AuthService ={
    signup,
    login,
    logout,
    getCurrentUser,
};

export default AuthService;