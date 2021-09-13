import styles from '../styles/Home.module.css'
import Page from "../lib/page"

const dadJoke = 'https://icanhazdadjoke.com/'

export async function getServerSideProps({ params }) {

    // Server side, fetch API / data whatever
    let resp = await fetch(dadJoke,{
        headers: {
            Accept: 'application/json',
        }
    })
    let joke = await resp.json()
    return { props: { joke } }
  }

  export default function ServerSide(props){
    console.log('secret is ',process.env.SECRET)

    const {joke} = props
    // console.log(' front-side : props ', props )
    
    return (
      <Page>
      <div className={styles.jokecontainer}>
        <div style={{fontWeight: 700}} >TELL ME A JOKE :</div>
        <div className={styles.jokebox}>{joke.joke}</div>
      </div>
    </Page>)
  }