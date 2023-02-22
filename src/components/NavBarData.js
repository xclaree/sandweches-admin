import React, { useState } from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';

export const NavBarData = [
    
    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome size="25px"/>,
        cName: "nav-text a",

    },
    {
        title: "Prodotti",
        path: "/product",
        icon: <MdIcons.MdLocalGroceryStore size="25px"/>,
        cName: "nav-text a",

    },
    {
        title: "Ingredienti",
        path: "/ingredient",
        icon: <MdIcons.MdFastfood size="25px"/>,
        cName: "nav-text a",

    },
    {
        title: "Offerte",
        path: "/offer",
        icon: <FaIcons.FaPercent size="25px"/>,
        cName: "nav-text a",

    },
    {
        title: "Profilo",
        path: "/profile",
        icon: <CgIcons.CgOptions size="25px"/>,
        cName: "nav-text a",
    }
];