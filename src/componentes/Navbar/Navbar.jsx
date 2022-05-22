import React, { useState, useEffect } from "react";
import  styles from "./Navbar.module.css";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const clasesItem = `${styles.nav_item} ${scroll ? styles.nav_item_black : ""}`;
  useEffect(() => {
    window.addEventListener("scroll", () => {setScroll((window.scrollY > 50))});

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${scroll ? styles.nav_black : ""}`}>
      <img
        className={styles.nav_logo}
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix Logo"
      />
      <div className={styles.nav_menu}>
        <a className={clasesItem} href="#top">
          Inicio
        </a>

        <a className={clasesItem} href="#seriesPopulares">
          Series
        </a>

        <a className={clasesItem} href="#peliPopulares">
          Peliculas
        </a>

        <a className={clasesItem} href="#peliMejorRanking">
          Novedades populares
        </a>

        <a className={clasesItem} href="#seriesMejorRanking" >
          Mi lista
        </a>
      </div>

      <img
        className={styles.user}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
    </nav>
  );
};

export default Navbar;

