import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import NotFound from "./components/NotFound.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

import "./App.css";

function App() {

  let [access, setAccess] = useState(false);

  const navigate = useNavigate();

     async function login(userData) {
      // const { email, password } = userData;
      // const URL = 'http://localhost:3001/rickandmorty/login/';
      // axios(URL + `?email=${email}&password=${password}`)
      // .then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      //    if (!access) window.alert("Invalid username or password")
         
      // })
      const {email, password} = userData;
      const {data} = await axios (`http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`);

      const access = data.access;
      setAccess(access);
      access && navigate('/home');
      if (!access) window.alert('Invalid username or password')
   }

  function logout() {
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();

  let [characters, setCharacters] = useState([]);

  //Nueva API
  //http://rym2-production.up.railway.app/api/character/${id}?key=henrym-usuariodegithub

  async function onSearch(id) {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const existingChar = characters.find((character) => character.id == data.id);
  
      if (existingChar) {
        window.alert("This character has already been added!");
      } else if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("No character was found with this ID!");
      }
    } catch (error) {
      if (!isNaN(id)) {
        window.alert("No character was found with this ID!");
      } else {
        window.alert("This is not a valid ID!");
      }
    }
  }

  function onClose(id) {
    let filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);

    const existingCharacter = characters.find(
      (character) => character.id == randomId
    );
    if (existingCharacter) {
      randomHandler();
    } else {
      onSearch(randomId);
    }
  }

  return (
    <div className="App">
      {location.pathname != "/" ? (
        <Nav
          onSearch={onSearch}
          logout={logout}
          randomHandler={randomHandler}
        />
      ) : (
        ""
      )}
      {/* <Nav onSearch={onSearch} randomHandler={randomHandler}/> */}
      <Routes>
        <Route path="" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
