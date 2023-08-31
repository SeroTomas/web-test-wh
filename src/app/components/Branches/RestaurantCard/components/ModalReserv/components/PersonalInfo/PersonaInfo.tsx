import { Input } from "antd"
import styles from "./personalInfo.module.scss"
const PersonaInfo = () => {

  return (
    <>
      <div className='infoContainer'>
        <h2>Informacion Personal</h2>
        <div className='text'>
          <p>Por favor ingresa tu nombre, direccion de email y numero telefonico</p>
        </div>
      </div>
      <form className={styles.form}>
        <div>
          <label>Nombre</label>
          <Input placeholder="Juan Perez" size="large" />
        </div>
        <div>

          <label>Direccion de email</label>
          <Input placeholder="juanperez@gmail.com" size="large"/>
        </div>
        <div>
          <label>Numero telefonico</label>
          <Input placeholder="+54 11 3265 - 6790" size="large"/>
        </div>
      </form>
    </>
  )
}
export default PersonaInfo