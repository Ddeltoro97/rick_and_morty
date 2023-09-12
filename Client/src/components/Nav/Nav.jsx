import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from './Nav.css'

export default function Nav({ onSearch, randomHandler, logout }) {
  const banner = "https://www.abystyle.com/c/300-category_default/rick-and-morty.jpg";

  return (
    <div className="container">
      <img src={banner} className="logo" alt="Rick&Mortybanner" />
      <div className="navi">
      {/* <div className="container"> */}
        <SearchBar onSearch={onSearch} />
        <button className="navbutton" onClick={randomHandler}>
          <NavLink className="navbutton" to="/home">Add Random</NavLink>
        </button>
        {/* </div> */}
        <div>
        
        <button className="navbutton">
          <NavLink className="navbutton" to="/home">Home</NavLink>
        </button>

        <button className="navbutton">
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
