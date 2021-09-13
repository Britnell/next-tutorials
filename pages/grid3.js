import Page from "../lib/page"
import styles from "../styles/Home.module.css"
import Link from "next/link"
import colors from '../data/colors.json'

export default function Grid(){

    let list = 'asdfhjklpoiuytrewq'.split('')
    let extrastyle = [ styles.wide,styles.tall,styles.tall,,,,,styles.wide]
    return (
        <Page>
            <div>RESPONSIVE GRID</div>
            <div className={styles.pgridcont}>
                {colors.map((el,i)=>(<div 
                    key={i} 
                    style={{ 
                        backgroundColor: el.hex,  
                    }}
                    className={extrastyle[i]}                    
                >{i}{el.name}</div>
                ))}
            </div>
            
        </Page>
    )

}