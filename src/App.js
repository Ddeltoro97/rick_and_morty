import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState} from 'react';
import axios from "axios";
import {Routes, Route} from 'react-router-dom';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import NotFound from './components/NotFound.jsx';

import './App.css';


function App() {
   let [characters, setCharacters] = useState([]);


   //Nueva API
   //http://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub
   
   function onSearch(id) {
      if(id > 0 && id<827){
      axios(`http://rym2-production.up.railway.app/api/character/${id}?key=henrym-ddeltoro97`).then(({ data }) => {
         const existingCharacter = characters.find((character) => character.id === data.id)
         if (existingCharacter){
            window.alert('¡Ya fué agregado!')
            return;
         }
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   else{
      window.alert('¡ID no es válido!');
   }
   }
      
   

   function onClose (id){
      let filteredCharacters = characters.filter(character =>character.id !== Number(id));
      setCharacters(filteredCharacters);

   }

   function randomHandler(){
      let randomId = (Math.random()*826).toFixed();
      randomId= Number(randomId);
      

      const existingCharacter = characters.find((character) => character.id === randomId);
      if (existingCharacter){
         randomHandler();
      }
      else{
         onSearch(randomId);
      }
      
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomHandler={randomHandler}/>
         <Routes>
            <Route path = '/home' element = {<Cards characters={characters} onClose={onClose}/>}></Route>
            <Route path = '/about' element = {<About/>}></Route>
            <Route path = '/detail/:id' element = {<Detail/>}></Route>
            <Route path = '*' element = {<NotFound/>}></Route>
         </Routes>
      </div>
   );
}

export default App;
