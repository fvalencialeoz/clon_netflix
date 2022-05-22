import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.layout}> 
          <div className={styles.container}>{children}</div>
        </div>
      </main>
      <footer>Desarrollado por M.Fernanda Valencia L (CaC#22016) y Carlos Sivori (CaC#22015)</footer>
    </div>
  );
};

export default Layout;