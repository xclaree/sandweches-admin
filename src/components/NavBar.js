import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavBarData } from './NavBarData';
import '../App.css';
import { IconContext } from "react-icons";
import logo from './logo.png';

function NavBar() {
    
    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                <nav className={"nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <img src={logo} />
                            </Link>

                        </li>
                        {NavBarData.map((item, index) => {
                            return (
                                <div>
                                    <li key={index} className={item.cName}>
                                        <NavLink to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </NavLink>

                                    </li>
                                </div>
                            )
                        })}
                    </ul>

                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;