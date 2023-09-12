import { NavLink, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import style from "./Card.css";

function Card(props) {
  const {
    key,
    id,
    name,
    species,
    gender,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  let [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ key, id, name, species, gender, image, onClose });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  let location = useLocation();

  return (
   
    <div>
      
      {location.pathname == "/home" ? (
        <button className= "buttons" onClick={() => onClose(id)}>X</button>
      ) : ("")}
      {/* // (<button onClick={()=>onClose(id)}>X</button>) */}
      {isFav ? (
        <button className="buttons" onClick={handleFavorite} >❤️</button>
      ) : (
        <button className="buttons" onClick={handleFavorite}>🤍</button>
      )}
     <div className="card">
      <NavLink className="hola" to={`/detail/${id}`}>
         <div className="header">
        <h2 className="title">{name}</h2>
        </div>
        <img src={image} alt="NA" className="charpic" />
      <div className="info">
      <h2>Species: {species}</h2>
      <h2>Gender: {gender}</h2>
      </div>
      <h2 className="id">{id}</h2>
      </NavLink>
      </div>
    </div>
   
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
