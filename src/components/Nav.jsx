import SearchBar from "./SearchBar";
import {NavLink} from 'react-router-dom';

export default function Nav({onSearch, randomHandler}){

    return(
        <div>
        <button><NavLink to = '/about'>About</NavLink></button>
        <button><NavLink to = '/home'>Home</NavLink></button>
        <SearchBar onSearch={onSearch}/>
        <button onClick={randomHandler}><NavLink to = '/home'>Add Random</NavLink></button>
        </div>
    )
};