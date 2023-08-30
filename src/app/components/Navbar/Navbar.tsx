'use client'
import styles from "./navbar.module.scss";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(currentScrollPos >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}>
      <p onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}>SomeWhere</p>
    </nav>
  );
};

export default Navbar;