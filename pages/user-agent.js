import styles from '../styles/Home.module.css'
import Page from "../lib/page"


  export default function Context(props){
    
    console.log(' front-side : ', props )
    
    return (
      <Page>
        <div>CONTEXT :</div>
        <div>{props.userAgent}</div>
        
    </Page>)
  }

  Context.getInitialProps = async function userAgent(ctx){
    const userAgent = (ctx.req) ? ctx.req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }