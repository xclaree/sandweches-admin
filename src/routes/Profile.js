import React from "react";
import '../App.css';
import Order from "../components/OrderTable";
import NewPasswordPopup from"../components/NewPasswordPopup";
import { Link, NavLink } from 'react-router-dom';

function Profile({setToken}){

const handleLogout = () => {
    setToken(false);
    localStorage.clear();
    window.location.reload();
  };


    return(
        <div className="home">
            <h1>Profile</h1>
            <div>
                <label className="username_label">
                    Nome Cognome
                </label>
            </div>
            <div>
                <label className="username_info_label">
                   Admin Amdin
                </label>
            </div>
            <div>
                <label className="email_label">
                    Email    
                </label>
            </div>
            <div>
                <label className="email_info_label">
                adminadmin@iisviolamarchesini.edu.it
                </label>
            </div>
            <div>
                <label className="password_label">
                    Password
                </label>
            </div>
            <div>
              <input type="password" size="40" maxlength="200" className="input_password_user" />
            </div>
            <span></span>
            <div className="submit-side">
                <NavLink to="/termsconditions">
                <button style={{ width: '280px'}}> Termini e condizioni</button>
                </NavLink>
            </div>
            <span></span>
            <div className="submit-side" onClick={NewPasswordPopup}>
                <button style={{ width: '280px'}}>
                Modifica Password
                </button>
            </div>
            <span></span>
            <div className="submit-side" onClick={handleLogout}>
                <NavLink to="/">
                <button style={{ width: '280px'}}>
                Esci dall'account
                </button>
                </NavLink>
            </div>
        </div>
    )
}

export default Profile;
