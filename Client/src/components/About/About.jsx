import React from "react";
import Styles from "./About.module.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import perfil from "../images/perfil.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function About(props) {
  return (
    <div className={Styles.divGeneral}>
      <Link to="/home">
        <button className={Styles.buttonBackStyle}>
          <BiArrowBack />
        </button>
      </Link>
      <img src={perfil} className={Styles.image} />
      <p>Natalia Sofia Rodriguez Niño</p>
      <p>Full Stack Developer</p>
      <Link
        to="https://www.linkedin.com/in/natalia-sofia-rodriguez/"
        target="_blank"
      >
        <button className={Styles.buttonLinkedin}>
          <FaLinkedin />
        </button>
      </Link>
      <Link to="https://github.com/NataliaRoni" target="_blank">
        <button className={Styles.buttonLinkedin}>
          <BsGithub />
        </button>
      </Link>
    </div>
  );
}
