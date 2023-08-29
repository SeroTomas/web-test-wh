
import { Footer, Hero, Navbar, Steps, WhoWeAre } from './components'

import styles from './page.module.scss'

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar/>
      <Hero />
      <WhoWeAre />
      <Steps />
      <Footer/>
    </main>
  )
}
