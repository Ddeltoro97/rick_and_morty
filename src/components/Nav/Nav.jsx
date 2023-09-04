import SearchBar from "./SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import style from './Nav.css'

export default function Nav({ onSearch, randomHandler, logout }) {
  const banner = "https://www.abystyle.com/c/300-category_default/rick-and-morty.jpg";

  // const location = useLocation();

  // if (location.pathname === '/'){
  //     return null;
  // }
  // else{
  //      return(
  //     <div>
  //     <button><NavLink to = '/about'>About</NavLink></button>
  //     <button><NavLink to = '/home'>Home</NavLink></button>
  //     <SearchBar onSearch={onSearch}/>
  //     <button onClick={randomHandler}><NavLink to = '/home'>Add Random</NavLink></button>
  //     </div>
  // )
  // }
  return (
    <div>
      <img src={banner} className="logo" alt="Rick&Mortybanner" />
      <div className="navi">
        <button className="navbutton">
          <NavLink className="navbutton" to="/about">About</NavLink>
        </button>
        <button className="navbutton">
          <NavLink className="navbutton" to="/home">Home</NavLink>
        </button>


        <button className="navbutton">
          <NavLink className="navbutton" to="/favorites">Favorites</NavLink>
        </button>
        <button className="navbutton" onClick={logout}>Log out</button>

        <div className="flex"><SearchBar onSearch={onSearch} />
        <button className="navbutton" onClick={randomHandler}>
          <NavLink className="navbutton" to="/home">Add Random</NavLink>
        </button></div>
      </div>
    </div>
  );
}
