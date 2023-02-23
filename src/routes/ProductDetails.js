import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import ProductPopup from '../components/ProductPopup';
import { getArchiveProduct } from "../api/prova";
import { useQuery, useMutation } from "@tanstack/react-query";

function ProductDetails(){
    const productQuery = useQuery({
        queryKey: ["products"],
        queryFn: (obj) => {
            console.log(obj);
          return getArchiveProduct()
        }                               
      }) 
    return(
        <div className="home">
            <h1> Dettagli prodotto </h1>
        </div>
    )
}

export default ProductDetails;
