import Router from "next/router";
import useSWR from "swr";
import fetchJson from "./fetchJson";
import React from "react";

export default function useUser({ 
  loginRedirect=false, 
  logoutRedirect=false, 
}={}) {

  const { data, error } = useSWR("/api/user",fetchJson);

  React.useEffect(() => {
    
    if(loginRedirect && data && data?.isLoggedIn)
      Router.push(loginRedirect)

    if(logoutRedirect && data && !data?.isLoggedIn)
      Router.push(logoutRedirect)

  }, [data,error,loginRedirect,logoutRedirect]);

  return { 
    user: data, 
    isLoading: !error && !data,
    isError: error,
  };
}
