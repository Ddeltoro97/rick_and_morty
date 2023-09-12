import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Validation from "./Validation";
import style from "./Form";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      Validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  
  return (
    <div className="login">
    <form onSubmit={handleSubmit}>
        <div className="caja">
      <label htmlFor="Email">Email: </label>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={userData.email}
        onChange={handleChange}
      ></input>
      {errors.email ? <p className="error">{errors.email}</p> : ""}
      </div>

      <div>
      <label htmlFor="Password">Password: </label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={userData.password}
        onChange={handleChange}
      ></input>
        </div>

      <button disabled={!userData.email || errors.email || !userData.password}>
        Submit
      </button>
    </form>
    </div>
  );
}
