import Page from "../lib/page"
import colors from "../data/colors.json"
import Link from "next/link"

export default function Colors(){

    return (
        <Page>
            <div>
                <div>Example</div>
                <p>pre-rendered static pages from list / obj data </p>
            </div>
            {colors.map((obj,i)=> (
                <Link key={i} href={`/color/${obj.name}`} passHref>
                    <div>{obj.name}</div>
                </Link>
            ) )}
        </Page>
    )

}