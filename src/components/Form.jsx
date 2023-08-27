import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import Validation from "./Validation"

export default function Form({login}){


    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    function handleSubmit(event){
        event.preventDefault();
        login(userData);

    }

    const[errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors(
            Validation({
                ...userData,
                [event.target.name]: event.target.value
            })
        )
        
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email: </label>
            <input name = 'email' type = "email" placeholder="Enter your email" value={userData.email} onChange={handleChange}></input>
            {errors.email ? <p>{errors.email}</p> : ''}

            <hr></hr>
            <label htmlFor="Password">Password: </label>
            <input name = "password" type = "password" placeholder="Enter your password" value={userData.password} onChange={handleChange} ></input>
            {errors.password ? <p>{errors.password}</p> : ''}

            <hr />
            <button disabled={!userData.email ||  errors.email}
            >Submit</button>
        </form>
    )
}