import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import { setLogin } from "../api/prova";
import {
  useQuery,
} from "@tanstack/react-query";
import PropTypes from "prop-types";

function Login(props) {
  // const [isAuth, setAuth] = useState(0); //isAuth è un intero e corrisponde all'id della persona autenticata
  //isAuth = 0 quando non si è autenticati
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setToken} = props;

  const setLoginQuery = useQuery({
    queryKey: ["login"],
    queryFn: (obj) => {
      console.log(obj);
      return setLogin(email, password);
    },
  });

  const handleSubmit = async () => {
    const token = await setLoginQuery(email, password);
    setToken(token);
    window.location.reload();
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="home">
      <h1>Login</h1>
      <span></span>
      <div className="form-container">
        <div>
          <label>
            <b>Email:</b>
            <input
              style={{ width: "400px" }}
              name="user_email"
              type="text"
              placeholder="Inserisci la tua email"
              size="40"
              maxlength="200"
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <span></span>
        <div>
          <label>
            <b>Password:</b>
            <input
              style={{ width: "400px" }}
              name="user_password"
              type="text"
              placeholder="Inserisci la password"
              size="40"
              maxlength="200"
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div style={{ display: "inline", fontSize: "1rem", fontWeight: "400" }}>
          <NavLink to="/home">
            <button className="submit" type="submit">Accedi</button>
          </NavLink>
          <span></span>
          <NavLink to="/resetpassword">Ho dimenticato la password</NavLink>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
