import SearchBar from "./SearchBar";
import {NavLink, useLocation} from 'react-router-dom';

export default function Nav({onSearch, randomHandler, logout}){

    
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
    return(
        <div>
        <button><NavLink to = '/about'>About</NavLink></button>
        <button><NavLink to = '/home'>Home</NavLink></button>
        <SearchBar onSearch={onSearch}/>
        <button onClick={randomHandler}><NavLink to = '/home'>Add Random</NavLink></button>
        <button><NavLink to = '/favorites'>Favorites</NavLink></button>
        <button onClick={logout}>Log out</button>
        </div>
    )
};