import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import reducer from "../../redux/reducer";
import { filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from './Nav.css'


export default function Nav({ onSearch, randomHandler, logout }) {

  const dispatch = useDispatch()

  const handleSwitch = () =>{
    dispatch(filterCards("All"));
  }

  const addRandomChar = () =>{
    randomHandler();
    handleSwitch();
  }

  const banner = "https://www.abystyle.com/c/300-category_default/rick-and-morty.jpg";

  return (
    <div className="container">
      <img src={banner} className="logo" alt="Rick&Mortybanner" />
      <div className="navi">
      {/* <div className="container"> */}
        <SearchBar onSearch={onSearch} onSwitch={handleSwitch} />
        <button className="navbutton" onClick={addRandomChar}>
          <NavLink className="navbutton" to="/home">Add Random</NavLink>
        </button>
        {/* </div> */}
        <div>
        
        <button className="navbutton" onClick={handleSwitch}>
          <NavLink className="navbutton" to="/home">Home</NavLink>
        </button>

        <button className="navbutton" onClick={handleSwitch}>
          <NavLink className="navbutton" to="/favorites">Favorites</NavLink>
        </button>
        <button className="navbutton">
          <NavLink className="navbutton" to="/about">About</NavLink>
        </button>
        <button className="navbutton" onClick={logout}>Log out</button>
        </div>
        
      </div>
    </div>
  );
}
