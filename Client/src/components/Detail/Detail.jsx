import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <Link to="/home">
        <button>Back</button>
      </Link>
      <h1>Name: {character.name}</h1>
      <h2>Status: {character.status}</h2>
      <h2>Specie: {character.species}</h2>
      <h2>Gender: {character.gender}</h2>
      <h2>Origin: {character.origin?.name}</h2>
      <img src={character.image} />
    </div>
  );
}
