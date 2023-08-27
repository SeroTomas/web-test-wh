import styles from "./navbar.module.scss";

const Navbar = () => {

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logotype}>
        <p>Find Eat</p>
      </div>
      <div className={styles.navMobile}>
        <button></button>
      </div>
      <div className={styles.navDesk}>
      </div>
    </nav>
  )
}

export default Navbar