import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Nav.css'

export default function SearchBar({onSearch}) {

   let [id, setId] = useState("");

   function onChange (event){
      setId(event.target.value);
   }

   return (
      <div className="flex">
         <input className="bar" type='search' onChange={onChange} value={id} placeholder="Enter ID" />
         <button className="navbutton" onClick={() => {onSearch(id)}}><NavLink className="navbutton" to = '/home'>Add</NavLink></button>
      </div>
   );
}
