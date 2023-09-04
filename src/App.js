import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import NotFound from "./components/NotFound.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

import "./App.css";

function App() {
  let email = "hola@gmail.com";
  let password = "123asd";
  let [access, setAccess] = useState(false);

  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Invalid username on password");
    }
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

  function onSearch(id) {
    if (id > 0 && id < 827) {
      axios(
        `http://rym2-production.up.railway.app/api/character/${id}?key=henrym-ddeltoro97`
      ).then(({ data }) => {
        const existingCharacter = characters.find(
          (character) => character.id === data.id
        );
        if (existingCharacter) {
          window.alert("This character has already been added!");
          return;
        }
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No character was found with this ID!");
        }
      });
    } else {
      window.alert("Invalid ID!");
    }
  }

  function onClose(id) {
    let filteredCharacters = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(filteredCharacters);
  }

  function randomHandler() {
    let randomId = (Math.random() * 826).toFixed();
    randomId = Number(randomId);

    const existingCharacter = characters.find(
      (character) => character.id === randomId
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
