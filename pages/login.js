
import Page from "../lib/page";
import fetchJson from '../lib/fetchJson'
import React from "react";
import Router from "next/router";
import useSWR from "swr";
import useUser from "../lib/useUser";

const Login = () => {
    useUser({
        loginRedirect: '/profile',
    })

    const formsubmit = async (ev)=>{
        ev.preventDefault()
        const body = {  username: ev.target.elements.user.value,  }

        try {
            fetchJson("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            })
            .then((data)=>{
                Router.push('/profile')
            })
          } catch (error) {
            console.error("An unexpected error happened:", error);
          }
    }

    return (
        <Page>
            <div>LOGIN</div>
            <form onSubmit={formsubmit} >
                <input id="user" type="text" ></input>
            </form>
        </Page>
    )
}

export default Login;