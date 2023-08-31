'use client'
import { DatePicker, Select, TimePicker } from "antd";
import styles from "./BookingDate.module.scss";

const BookingDate = () => {
    return (
        <>
            <div className='infoContainer'>
                <h2>Datos de la reserva</h2>
                <div className='text'>
                    <p>Por favor ingresa fecha, hora y para cuantos comensales es la reserva</p>
                </div>
            </div>
            <div className={styles.datePickers}>
                <div>
                    <label>Fecha</label>
                    <DatePicker size="large" placeholder='Seleccione una fecha' style={{ width: "100%", flexGrow: "1", borderRadius: '5px' }} />
                </div>
                <div>
                    <label>Horario</label>
                    <TimePicker size="large" placeholder='Seleccione un horario' style={{ width: "100%", flexGrow: "1", borderRadius: '5px' }} />
                </div>
                <div>
                    <label>Comensales</label>
                    <Select
                        placeholder='Indique la cantidad de personas'
                        style={{ width: "100%", flexGrow: "1", borderRadius: '5px' }}
                        size="large"
                        options={[
                            { label: '1 Persona' },
                            { label: '2 Personas' },
                            { label: '3 Personas' },
                            { label: '4 Personas' },
                            { label: '5 Personas' },
                            { label: '6 Personas' }
                        ]}
                    />
                </div>
            </div>
        </>
    )
}
export default BookingDate