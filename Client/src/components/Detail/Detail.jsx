import axios from "axios"
import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import style from "./Detail.css"


export default function Detail (){

    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No character has this Id');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div className="detail">
        <div className="char">
            
            <div className="header">
             <h2 className="name">{character?.name}</h2>
            </div>

            <img className="charpicdetail" src={character?.image} alt={character.name} />
            <div className="items">
            <h2>Status: {character?.status}</h2>
            <h2>Species: {character?.species}</h2>
            <h2>Gender: {character?.gender}</h2>
            <h2>Origin: {character?.origin?.name}</h2>
            {/* <h2 className="id">{character?.id}</h2> */}
            </div>
            <h2 className="id">{character?.id}</h2>
        </div>
        </div>
    )
}