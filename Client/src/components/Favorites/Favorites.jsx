import Card from "../Card/Card";
import reducer from "../../redux/reducer";
import { connect, useDispatch } from "react-redux";
import {
  addFav,
  removeFav,
  filterCards,
  orderCards,
} from "../../redux/actions";
import { useState } from "react";
import style from "./Favorites";

function Favorites({ myFavorites }) {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const handleBackColor = (hover) =>{
    if (hover) return "white";
    if (!hover) return "black"
  }

  return (
    <div>
      <select onChange={handleOrder} style={{width: 200, height: 40, color: "#0E0E0E", backgroundColor: "rgb(164, 162, 162)", borderRadius: 5, fontFamily: "myFont", fontSize: 20, margin: 10}}>
        <option value="A">Ascending</option>
        <option value="D">Descending</option>
      </select>
      <select  onChange={handleFilter} style={{width: 200, height: 40, color: "#0E0E0E", backgroundColor: "rgb(164, 162, 162)", borderRadius: 5, fontFamily: "myFont", fontSize: 20, margin: 10,}}>
        <option value="All">Show all</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className="container">
        {myFavorites?.map((fav) => {
          return (
            <Card
              key={fav.id}
              id={fav.id}
              name={fav.name}
              species={fav.species}
              gender={fav.gender}
              image={fav.image}
              onClose={fav.onClose}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
