import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Card, { mapDispatchToProps } from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value={"A"}>Ascendente</option>
        <option value={"D"}>Descendente</option>
      </select>
      <select onChange={handleFilter} defaultValue={"All"}>
        <option value={"All"}>All</option>
        <option value={"Male"}>Male</option>
        <option value={"Female"}>Female</option>
        <option value={"Genderless"}>Genderless</option>
        <option value={"unknown"}>unknown</option>
      </select>
      {myFavorites?.map(({ id, name, species, image, gender }) => (
        <Card
          key={id}
          id={id}
          name={name}
          species={species}
          image={image}
          gender={gender}
        />
      ))}
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}
