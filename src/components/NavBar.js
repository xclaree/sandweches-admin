import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
import { SideBarData } from './SideBarData';
import '../App.css';
import { IconContext } from "react-icons";
import logo from './logo.png';

function NavBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                <nav className={"nav-menu"}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <img src={logo} />
                            </Link>

                        </li>
                        {SideBarData.map((item, index) => {
                            return (
                                <div>
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>

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