import useSWR from "swr"
import React from "react"

import Page from "../lib/page"
import styles from "../styles/Home.module.css"


const dadJoke = 'https://icanhazdadjoke.com/'
const fetcher = (...args) => fetch(...args,{ headers: {Accept: 'application/json'},} ).then(res => res.json())

export default function SWR(){
    const { data, error } = useSWR(dadJoke,fetcher)

    console.log({data,error})

    var thing
    if(error)
        thing = (<div>FAIL : error</div>)
    else if(!data)
        thing = (<div>Loading.....</div>)
    else 
        thing = (<div> JOKE : {JSON.stringify(data)}</div>)

    return (<Page>{thing}</Page>)
}
