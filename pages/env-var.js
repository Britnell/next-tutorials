import React from "react"
import Page from "../lib/page"
import styles from "../styles/Home.module.css"

export default function Env(){

    const [secret,setSecret] = React.useState('')
    
    React.useEffect(()=>{
        
        fetch('/api/secret')
            .then(res=>res.json())
            .then(json=> setSecret(json.secret))
            .catch(err=> {
                console.log(err);    setSecret('ERROR');
            })

    },[])
    return (
        <Page>
            <div>Environment variables</div>
            <div>.env variable (fetched with api) is  : </div>
            <div style={{
                fontStyle: 'italic', height: '3rem', width: '280px', backgroundColor: '#eee',
                display: "flex", justifyContent: 'center', alignItems:'center',
            }}>{secret}</div>
        </Page>
    )

}