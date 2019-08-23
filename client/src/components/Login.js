import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    e.preventDefault();
    setCredentials({...credentials, 
        [e.target.name]: e.target.value
    })
  }

  const routeToColors = () => {
    // props.history.push("/PrivateRoute")
  }  

  const handleSubmit = e => {
    e.preventDefault();
    console.log("username+pw", credentials.username, credentials.password)
    axios
        .post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload)
            routeToColors()
        })
        .catch(err => console.log("Error", err.response))
  }


  return(
    <div>   
        <form>
            <input 
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button onClick={handleSubmit}>Log In</button>
        </form>
    </div>
  );
}

export default Login;
