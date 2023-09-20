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
    <div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", background: "radial-gradient(circle, rgba(34,21,78,1) 29%, rgba(66,42,93,1) 63%, rgba(1,5,17,1) 83%)"}}>
      <h5 style={{fontFamily: "myFont", fontSize: 55, color: " #41b4c9", textShadow: "1px 2px 32px #bfde42, -1px -3px 2px #bfde42" }}>RICK AND MORTY</h5>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "nowrap",  }}>
      <div style={{display: "flex", height: 300, justifyContent: "center", alignItems: "center", borderRadius: 10}}>

      
      <div>
      <form onSubmit={handleSubmit} style={{fontFamily: "myFont"}} >
        <div >
      <label htmlFor="Email" style={{marginLeft: 25, fontSize: 18, marginTop: 10, color: " #41b4c9", textShadow: "0px 0px 1px #bfde42, -1px -0px 1px #bfde42"}}>Email: </label>
      <input
        name="email"
        type="email"
        placeholder="Enter your email"
        value={userData.email}
        onChange={handleChange}
        style={{ height: 30, width: 200, color: "black", fontSize: 15, marginLeft: 1, background: "rgb(164, 162, 162)"}}
      ></input>
      <div style={{width: 170, height: 35, }}>
      {errors.email ? <p style={{color: "red", fontSize: 12, position: "fixed", marginLeft: 80}}>{errors.email}</p> : ""}
      </div>
      {/* {errors.email ? <p style={{color: "red", fontSize: 15, position: "en"}}>{errors.email}</p> : ""} */}
      </div>

      <div>
      <label htmlFor="Password" style={{fontSize: 18, color: " #41b4c9", textShadow: "0px 0px 1px #bfde42, -1px -0px 1px #bfde42"}} >Password: </label>
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={userData.password}
        onChange={handleChange}
        style={{ height: 30, width: 200, color: "black", fontSize: 15, marginBottom: 15, background: "rgb(164, 162, 162)" }}
      ></input>
        </div>

      <button disabled={!userData.email || errors.email || !userData.password} style={{marginLeft: 30, height: 30, width: 100, fontFamily: "myFont", color: "black", background: "#41b4c9"}}>
        Submit
      </button>
    </form>
      </div>
      </div>
    </div>
    </div>
  );
}
