import React, { useState } from "react";
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as CgIcons from 'react-icons/cg';

export const SideBarData = [
    
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text a",

    },
    {
        title: "Prodotti",
        path: "/product",
        icon: <MdIcons.MdLocalGroceryStore />,
        cName: "nav-text a",

    },
    {
        title: "Ingredienti",
        path: "/ingredient",
        icon: <MdIcons.MdFastfood />,
        cName: "nav-text a",

    },
    {
        title: "Offerte",
        path: "/offer",
        icon: <FaIcons.FaPercent />,
        cName: "nav-text a",

    },
    {
        title: "Profilo",
        path: "/profile",
        icon: <CgIcons.CgOptions />,
        cName: "nav-text a",
    }
];