import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import ProductPopup from './ProductPopup';
import { getArchiveProduct } from "../api/prova";
import { useQuery, useMutation } from "@tanstack/react-query";



const options = ["Modifica Prodotto", "Elimina Prodotto"];


function GetColorStatus(status){
  switch(status){
    case "attivo":
      return 'blue';
    case "non attivo":
      return 'red';
  }
  return 'red';
}

const ProductTable = () => {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: (obj) => {
        console.log(obj);
      return getArchiveProduct()
    }                               
  }) 
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); //METTI TRUE SE LA API VA
  let productname=[];
  let cnt=0;
  let idprodotti=[];


  return loading ? (
    <div>
      <table>
        <thead>
          <tr>
          <th>Nome</th>
            <th>Prezzo</th>
             <th>Stato</th>
          </tr>
        </thead>
        <tbody>
          <tr className="loading">
            <td colSpan={4}>
              <div className="loading-animation" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ) : (
    <div className="table-container">
      <table>
        <thead>
          <tr>
          <th>Nome</th>
            <th>Prezzo</th>
             <th>Stato</th>
          </tr>
        </thead>
        <tbody>
        { productQuery.data?.map( product=>(
            <tr key={product.id} {...idprodotti[cnt]=product.id}{...productname[cnt]=product.name}{...cnt++}>
              <td> {product.name}</td>
              <td>{product.price} </td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            id={productid}
            name={productname}
          />
    </div>
  );
};

export default ProductTable;
