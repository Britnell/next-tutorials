import Page from "../lib/page"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Grid(){

    return (
        <Page>
        <div style={{
            height: '100%',
            display: 'grid',
            gridGap: '6px',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
        }}>
                <div style={{
                    gridArea: 'gridheader',
                    gridRow: '1',gridColumn: '1 / 4',
                    // gridArea: '1 / 1 / 2 / 4',
                    backgroundColor: 'red',
                }}>A</div>
                <div style={{
                    gridColumn: '1',
                    gridRow: '2 / 4',
                    backgroundColor: 'green',
                }}>B</div>
                <div style={{
                    gridColumn: '2 / 4',
                    gridRow: '2 / 4',
                    backgroundColor: 'blue',
                }}>C</div>
                <div style={{
                    gridColumn: '3',
                    gridRow: '3',
                    backgroundColor: 'yellow',
                }}>D</div>
            </div>
            
        </Page>
    )

}