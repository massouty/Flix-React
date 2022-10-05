import React from "react";
import {Redirect} from "react";

function Profile({authorized}){
    if (!authorized){
        return <Redirect to ="/Login" />
    }
return<div>If you are here,you are allowed to be here!</div>
}

export default Profile;