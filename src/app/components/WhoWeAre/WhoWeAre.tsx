import styles from "./whoWeAre.module.scss";

const WhoWeAre = () => {
  return (
    <section className={styles.whoContainer} >
      <div className={styles.whoWeAre}>
        <div>
          <h2>¿Quienes somos?</h2>
          <p>Somos <span>SomeWhere</span>, una cadena de restaurants que decidio revolucionar todo entorno a que nuestros clientes se sientan en casa.</p>
        </div>

      </div>
      <div className={styles.imgContainer}>
      </div>
    </section>
  )
}
export default WhoWeAre