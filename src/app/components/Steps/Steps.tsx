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

        <div className={styles.steps}>
            <div className={styles.card1} data-aos={ "fade-right" }>
                <EnvironmentOutlined />
                <h3>¿Donde quieres buscar?</h3>
                <p>Ingresa la ciudad donde quieres encontrar los mejores restaurantes.</p>
            </div>

            <div className={styles.card2} data-aos={ "fade-right" }>
                <HomeOutlined />
                <h3>Elige el que te guste.</h3>
                <p>Puedes ver los restaurantes, sus imagenes, su direccion y lo más importante su reputacion.</p>
            </div>

            <div className={styles.card3} data-aos={"fade-right"}>
                <ScheduleOutlined />
                <h3>Haz tu reserva.</h3>
                <p>Podrás elegir el día y la hora en que quieres asistir.</p>
            </div>
        </div>
    )
}
export default Steps