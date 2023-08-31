import styles from "./footer.module.scss";

const Footer = () => {
  return (

    <div className={styles.infoContainer}>
      <p>© 2023 SomeWhere. Todos los derechos reservados.</p>
      <p>Política de Privacidad | Términos y Condiciones</p>
      <div className={styles.columns}>
        <div>
          <h5>Contacto</h5>
          <p>Dirección: Calle Ficticia, Número 123, Ciudad Imagiria</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Correo electrónico: info@gastronomiadeliciosa.com</p>
        </div>
        <div>
          <h5>Certificaciones</h5>
          <p>Certificado de Sabor Único, otorgado por la Sociedad Gastronómica Imaginaria.</p>
          <p>Premio a la Creatividad Culinaria, Asociación de Cocineros de la Ciudad.</p>
        </div>
      </div>
    </div>


  )
}
export default Footer