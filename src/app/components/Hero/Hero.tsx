'use clien'
import { DownOutlined } from "@ant-design/icons"
import styles from "./hero.module.scss"
import HeroInput from "./components/HeroInput/HeroInput"


const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.titleContainer}>
                <h1>SomeWhere</h1>
            </div>
            <div className={styles.heroContainer}>
                <div>
                    <h2>Tu sitio preferido </h2>
                    <h2>está a una reserva de distancia</h2>
                </div>
                <HeroInput/>
            </div>
            <div className={styles.scrollDown}>
                <DownOutlined className={styles.scrollIcon} />
                <p>¿Quieres saber más?</p>
            </div>
        </section>
    )
}

export default Hero