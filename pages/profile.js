
import React from "react";
import Router from "next/router";

import Page from "../lib/page"
import useUser from "../lib/useUser";

const Profile = ()=>{
    const {user,isLoading} = useUser({ 
        // logoutRedirect: '/login'
    })

    // console.log(user)

    const logout = ()=>{
        fetch('/api/logout')
        .then( ()=> Router.push('/login') )
    }

    const login = (user && user?.isLoggedIn)?user:null;

    return (
        <Page>
            <div>PROFILE</div>
            {isLoading && <div>... Loading</div>}
            {login?.username}
            <button onClick={logout}>LOGOUT</button>
        </Page>
    )
}

export default Profile