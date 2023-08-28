'use client'
import { EnvironmentOutlined, HomeOutlined, ScheduleOutlined } from "@ant-design/icons";
import styles from "./whoWeAre.module.scss";
import { Divider } from "antd";

const WhoWeAre = () => {
  return (
    <section className={styles.whoContainer}>

      <Divider />
      
      <div className={styles.whoWeAre}>
        <h2>¿Quienes somos?</h2>
        <p>Somos <span>Find Eat</span>, una aplicacion web dedicada a revolucionar la manera de decidir y reservar el lugar ideal para comer</p>
      </div>


      <div className={styles.steps}>

        <h2>¿Como funcionamos?</h2>

        <div className={styles.card}>
          <EnvironmentOutlined />
          <h3>¿Donde quieres buscar?</h3>
          <p>Ingresa la ciudad donde quieres encontrar los mejores restaurantes.</p>
        </div>

        <div className={styles.card}>
          <HomeOutlined />
          <h3>Elige el que te guste</h3>
          <p>Puedes ver los restaurantes, sus imagenes, su direccion y lo más importante su reputacion.</p>
        </div>

        <div className={styles.card}>
          <ScheduleOutlined />
          <h3>Haz tu reserva</h3>
          <p>Podrás elegir el día y la hora en que quieres asistir.</p>
        </div>
      </div>

    </section>
  )
}
export default WhoWeAre