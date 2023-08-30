'use client'
import { EnvironmentOutlined, HomeOutlined, ScheduleOutlined } from "@ant-design/icons";
import styles from "./steps.module.scss";
import { useEffect, useState } from "react";

const Steps = () => {

    const [resolution, setResolution] = useState({ width: 0 });

    const handleResolution = () => {
        setResolution({ width: window.innerWidth });
    };

    useEffect(() => {

        window.addEventListener('resize', handleResolution);

        handleResolution();

        return () => {
            window.removeEventListener('resize', handleResolution);
        };

    }, []);

    return (

        <section className={styles.steps}>
            <div className={styles.cardContainer1}>
                <div className={styles.card1} data-aos={"fade-right"}>
                    <EnvironmentOutlined />
                    <h3>¿SomeWhere mas cercano?</h3>
                    <p>Puedes encontrar aqui mismo todas nuestras sucursales, para que puedas asistir a la que mas comoda te quede</p>
                </div>
                <div className={styles.deskImage1} data-aos={"fade-right"}>

                </div>
            </div>
            <div className={styles.cardContainer2}>
                <div className={styles.deskImage2} data-aos={"fade-right"}>

                </div>
                <div className={styles.card2} data-aos={"fade-right"}>
                    <HomeOutlined />
                    <h3>Elige el que te guste.</h3>
                    <p>Puedes ver los restaurantes, sus imagenes, su direccion y lo más importante su reputacion.</p>
                </div>
                <div className={styles.deskImage3} data-aos={"fade-right"}>

                </div>
            </div>

            <div className={styles.cardContainer3}>
                <div className={styles.deskImage4} data-aos={"fade-right"}>

                </div>
                <div className={styles.card3} data-aos={"fade-right"}>
                    <ScheduleOutlined />
                    <h3>Haz tu reserva.</h3>
                    <p>Podrás elegir el día y la hora en que quieres asistir.</p>
                </div>
            </div>
        </section>
    )
}
export default Steps