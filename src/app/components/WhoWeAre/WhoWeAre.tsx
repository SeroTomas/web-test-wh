'use client'
import styles from "./whoWeAre.module.scss";

const WhoWeAre = () => {
  return (
    <section className={styles.whoContainer} >
      <div className={styles.whoWeAre}>
        <div>
          <h2>¿Quienes somos?</h2>
          <p>Somos <span>Where Eat</span>, una aplicacion web dedicada a revolucionar la manera de elegir y reservar el lugar ideal para comer.</p>
        </div>
        
      </div>
    </section>
  )
}
export default WhoWeAre