import { Link } from "react-router-dom";
import Styles from "./Nav.module.css";
import logo from "../images/logo.png";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function Nav(props) {
  const [id, setId] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setId(value);
  }
  return (
    <div className={Styles.divGeneral}>
      <img className={Styles.imgLogo} src={logo} alt="" />
      <div className={Styles.divLinkContainer}>
        <Link to="/home">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/favorites">
          <p>My Favorites</p>
        </Link>
      </div>
      <div className={Styles.divButtonContainer}>
        <input
          className={Styles.inputStyle}
          onChange={handleChange}
          type="search"
          placeholder="Enter id"
        />

        <button
          className={Styles.buttonAddStyle}
          onClick={() => props.onSearch(id)}
        >
          <BsSearch color="white" strokeWidth="0.8" />
        </button>

        <button className={Styles.buttonStyle} onClick={() => props.onRandom()}>
          Random
        </button>
        <button className={Styles.buttonStyle} onClick={() => props.logOut()}>
          Log out
        </button>
      </div>
    </div>
  );
}
