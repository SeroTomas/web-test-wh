import styles from "./hero.module.scss"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContainer}>
                <h1>Find Eat</h1>
                <div>
                    <h2>Tu lugar preferido </h2>
                    <h2>está a una reserva de distancia</h2>
                </div>
            </div>

        </section>
    )
}

export default Hero