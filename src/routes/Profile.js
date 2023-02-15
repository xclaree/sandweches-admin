import React from "react";
import '../App.css';
import Order from "../components/OrderTable";
import NewPasswordPopup from"../components/NewPasswordPopup";

function Profile(){
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
            <div className="termini_condizione_button" >
                <h3> Termine e condizioni</h3>
            </div>
            <div className="modifica_password_button" onClick={NewPasswordPopup} >
                Modifica Password
            </div>
        </div>
    )
}

export default Profile;
