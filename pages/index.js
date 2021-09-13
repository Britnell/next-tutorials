import Page from "../lib/page"
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <Page>
      <div className={styles.center}>
          <div>ABC</div>
          <div>DEF</div>
        </div>
    </Page>
  )
}
