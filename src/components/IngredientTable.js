import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import IngredientPopup from './IngredientPopup';
import { useQuery, useMutation } from "@tanstack/react-query";
import {getIngredient} from "../api/prova";

const options = ["Modifica ingrediente", "Elimina ingrediente"];


const IngredientTable = () => {
  const ingredientsQuery = useQuery({
    queryKey: ["ingredients"],
    queryFn: (obj) => {
        console.log(obj);
      return getIngredient()
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
  const [loading, setLoading] = useState(false); //METTI TRUE SE LA API VA riguardare se bisogna mettere il true perchè e  va messo c'è un caricamento infinito e non mostra i dati nella tabella

  return loading ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrizione</th>
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
            <th>Allergeni</th>
          </tr>
        </thead>
        <tbody>
          { ingredientsQuery.data?.map( ingredient=>(
            <tr key={ingredient.id}>
              <td> {ingredient.name}</td>
              <td>{ingredient.description}</td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <IngredientPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
    </div>
  );
};

export default IngredientTable;
/*          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.allergen}</td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}*/ 
