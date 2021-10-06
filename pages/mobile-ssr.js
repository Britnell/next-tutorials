import styles from '../styles/Home.module.css'
import Page from "../lib/page"

import { useMediaQuery } from "react-responsive"

export default function Mobile(props){
  const isDesktop = useMediaQuery({ query: `(min-width: 800px)` })
  const isMobile = useMediaQuery({ query: `(max-width: 800px)` })
  
  console.log(' Rendering : ',{isDesktop,isMobile})  // Server side, BOTH are false

  const content = isDesktop ? 'desktop' : 'mobile'

  return (
    <Page>
    <div>DEVICE :</div>
    <div>{content}</div>
    </Page>)
}
