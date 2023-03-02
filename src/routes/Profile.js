import React from "react";
import "../App.css";
import NewPasswordPopup from "../components/NewPasswordPopup";
import { Link, NavLink } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Profile({setToken}) {

  const handleLogout = () => {
    localStorage.clear();
    setToken(false);
    window.location.reload();
  };

  return (
    <QueryClientProvider client={queryClient}>
    <div className="home">
      <h1>Profilo</h1>
      <form>
        <div className="form-container">
          <div style={{ display: "flex" }}>
            <label style={{ pointerEvents: 'none'}}>
              Nome e Cognome:
              <input
                style={{ width: "300px" }}
                type="text"
                value={localStorage.getItem('name') + ' ' + localStorage.getItem('surname')}
              />
            </label>
            <span></span>
            <label style={{ pointerEvents: 'none'}}>
              email
              <input
                 style={{ width: "400px" }}
                 type="text"
                value={localStorage.getItem('email')}
              />
            </label>
            <span></span>
          </div>
          <span></span>
          <div className="submit-side">
            <NavLink to="/termsconditions">
              <button style={{ width: "280px" }}> Termini e condizioni</button>
            </NavLink>
          </div>
          <span></span>
          <div className="submit-side" onClick={NewPasswordPopup}>
            <button style={{ width: "280px" }}>Modifica Password</button>
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
      </form>
    </div>
    </QueryClientProvider>
  );
}

export default Profile;