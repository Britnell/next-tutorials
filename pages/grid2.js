import Page from "../lib/page"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Grid(){

    let list = 'asdfhjklpoiuytrewq'.split('')

    return (
        <Page>
            <div>RESPONSIVE GRID</div>
            <div className={styles.rgridcont}>
                {list.map((l,i)=>(
                    <div key={i}>{l}</div>
                ))}
            </div>
            
        </Page>
    )

}