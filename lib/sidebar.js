import styles from '../styles/Home.module.css'
import examples from '../data/examples.js'
import Link from "next/link"

export default function Sidebar(){

    return (
        <div className={styles.sidebar}>
          {examples.map((name,i)=>(
            <Link key={i} href={`/${name}`} >
              <div className={styles.sidebaritem}>{name}</div>
            </Link>
          ) )}
        </div>
    )
}