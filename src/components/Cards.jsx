import React from 'react';
import Card from './Card';

export default function Cards(props) {

   const {characters} = props;

   return (
      <div >
         {characters.map((character) => {
            return <Card key={character.id} {...character}/>
         })}
   </div>);
}
