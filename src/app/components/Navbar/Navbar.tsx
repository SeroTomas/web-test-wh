'use client'
import { useState } from "react";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logotype}>
        <p>Find Eat</p>
      </div>
      <div className={styles.navMobile}>
        <button onClick={handleClick}></button>
        <div className={isActive ? styles.open : styles.closed}>
          <Link href="hero">Home</Link>
        </div>
      </div>
      <div className={styles.navDesk}>
      </div>
    </nav>
  )
}

export default Navbar