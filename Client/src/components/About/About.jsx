import React from "react";
import Styles from "./About.module.css";

export default function About(props) {
  return (
    <div className={Styles.div}>
      <nav className={Styles.nav}>
        <h1 className={Styles.h1}>
          ¡Bienvenido proyecto de integración de la API de Rick y Morty en
          React!
        </h1>
      </nav>
      <button className={Styles.boton}>By: Fabian Dominguez</button>
    </div>
  );
}
