import React, {useState} from "react";
import {NavLink} from 'react-router-dom';

export default function SearchBar({onSearch}) {

   let [id, setId] = useState("");

   function onChange (event){
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' onChange={onChange} value={id} placeholder="Enter Character ID" />
         <button onClick={() => {onSearch(id)}}><NavLink to = '/home'>Agregar</NavLink></button>
      </div>
   );
}
