import React from "react";
import Styles from "./About.module.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import perfil from "../images/perfil.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

export default function About(props) {
  return (
    <div className={Styles.divGeneral}>
      <Link to="/home">
        <button className={Styles.buttonBackStyle}>
          <BiArrowBack />
        </button>
      </Link>
      <div className={Styles.izquierda}>
        <p className={Styles.pNatalia}>Natalia Rodriguez</p>

        <img alt="Natalia" src={perfil} className={Styles.image} />

        <p className={Styles.pFullStack}>Full Stack Developer</p>
        <div className={Styles.botones}>
          <Link
            to="https://www.linkedin.com/in/natalia-sofia-rodriguez/"
            target="_blank"
          >
            <button className={Styles.buttonSocials1}>
              <FaLinkedin color="#0077b7" />
            </button>
          </Link>
          <Link to="https://github.com/NataliaRoni" target="_blank">
            <button className={Styles.buttonSocials2}>
              <BsGithub />
            </button>
          </Link>
        </div>
      </div>
      <div className={Styles.derecha}>
        <p className={Styles.pApp}>
          Hi! This application was created using the knowledge acquired during
          my training as a Full Stack Developer at Henry. I invite you to find
          and save your favorite characters in this app dedicated to Rick and
          Morty fans. <br />
          <br />
          This application was built using the following tools:
        </p>
        <FaReact className={Styles.tool} color="#07bcd8" />
        <TbBrandRedux className={Styles.tool} color="#764abc" />
        <IoLogoJavascript className={Styles.tool} color="#f2bf26" />
        <DiNodejs className={Styles.tool} color="#61b348" />
        <FaHtml5 className={Styles.tool} color="#e44d25" />
        <FaCss3Alt className={Styles.tool} color="#2062af" />
        <SiSequelize className={Styles.tool} color="#31426F" />
      </div>
    </div>
  );
}
