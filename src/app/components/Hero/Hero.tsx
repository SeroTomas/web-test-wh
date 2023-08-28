import { DownOutlined } from "@ant-design/icons"
import HeroInput from "../HeroInput/HeroInput"
import styles from "./hero.module.scss"


const Hero = () => {
    return (
        <section className={styles.hero} id="hero">
            <h1>Find Eat</h1>
            <div className={styles.heroContainer}>
                <div>
                    <h2>Tu lugar preferido </h2>
                    <h2>está a una reserva de distancia</h2>
                </div>
                <HeroInput />
            </div>
            <div className={styles.scrollDown}>
                <p>¿Quieres saber más?</p>
                <DownOutlined className={styles.scrollIcon} />
            </div>
        </section>
    )
}

export default Hero