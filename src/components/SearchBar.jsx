import React, {useState} from "react";

export default function SearchBar({onSearch}) {

   let [id, setId] = useState("");

   function onChange (event){
      setId(event.target.value);
   }

   return (
      <div>
         <input type='search' onChange={onChange} value={id} placeholder="Character" />
         <button onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}
