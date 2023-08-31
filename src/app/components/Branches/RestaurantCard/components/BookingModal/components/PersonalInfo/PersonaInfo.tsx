'use client'
import { Input } from "antd"
import styles from "./personalInfo.module.scss"
import { useState, ChangeEvent } from "react"
const PersonaInfo = () => {

  const [info, setInfo] = useState({
    name:'',
    email:'',
    phone: ''
  })

  const handleChange = (event :ChangeEvent<HTMLInputElement>) => {
    const inputSelector = event.target.name;
    const inputValue = event.target.value;
    setInfo({
      ...info,
      [inputSelector]:[inputValue]
    })
  }



  return (
    <>
      <div className='infoContainer'>
        <h2>Informacion Personal</h2>
        <div className='text'>
          <p>Por favor ingresa tu nombre completo, direccion de email y numero telefonico</p>
        </div>
      </div>
      <form className={styles.form}>
        <div>
          <label>Nombre</label>
          <Input placeholder="Juan Perez" size="large" name="name" value={info.name} onChange={handleChange} status={info.name.length === 0 ? "error" : ""} style={{borderRadius:'5px'}}/>
        </div>
        <div>
          <label>Direccion de email</label>
          <Input placeholder="juanperez@gmail.com" size="large" name="email" value={info.email} onChange={handleChange} status={info.email.length === 0 ? "error" : ""} style={{borderRadius:'5px'}}/>
        </div>
        <div>
          <label>Numero telefonico</label>
          <Input placeholder="+54 11 3265 - 6790" size="large" name="phone" value={info.phone} onChange={handleChange} status={info.phone.length === 0 ? "error" : ""} style={{borderRadius:'5px'}}/>
        </div>
      </form>
    </>
  )
}
export default PersonaInfo