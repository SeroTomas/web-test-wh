import styles from "./personalInfo.module.scss"
import PersonalInput from "./PersonalInput/PersonalInput"
const PersonaInfo = () => {

  return (
    <>
      <div className='infoContainer'>
        <h2>Informacion Personal</h2>
        <div className='text'>
          <p>Por favor ingresa tu nombre, direccion</p>
          <p>de email y numero telefonico</p>
        </div>
      </div>
      <form className={styles.form}>
        <PersonalInput label={"Nombre"} name={"name"} type={"text"} />
        <PersonalInput label={"Direccion de email"} name={"email"} type={"email"} />
        <PersonalInput label={"Numero telefonico"} name={"phone"} type={"phone"} />
      </form>
    </>
  )
}
export default PersonaInfo