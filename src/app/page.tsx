import { Hero, WhoWeAre } from './components'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero/>
      <WhoWeAre/>
    </main>
  )
}
