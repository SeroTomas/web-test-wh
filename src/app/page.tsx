
import { DividerSocials, Footer, Hero, Navbar, Steps, WhoWeAre } from './components'
import Branches from './components/Branches/Branches'

import styles from './page.module.scss'

export default function Home() {

  return (
    <main className={styles.main}>
      <Navbar/>
      <Hero />
      <DividerSocials/>
      <WhoWeAre />
      <Steps />
      <Branches/>
      <DividerSocials/>
      <Footer/>
    </main>
  )
}
