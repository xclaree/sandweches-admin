import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import OfferPopup from './OfferPopup';
import { useQuery, useMutation } from "@tanstack/react-query";
import { getArchiveOffer } from "../api/prova";

const options = ["Modifica Offerta", "Elimina Offerta"];


function GetColorStatus(status){
  switch(status){
    case "attivo":
      return 'blue';
    case "non attivo":
      return 'red';
  }
  return 'red';
}


const OfferTable = () => {
  const offerQuery = useQuery({
    queryKey: ["offer"],
    queryFn: (obj) => {
        console.log(obj);
      return getArchiveOffer()
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
            <th>Data inizio</th>
             <th>Data fine</th>
          </tr>
        </thead>
        <tbody>
        { offerQuery.data?.map( offer=>(
            <tr key={offer.id}>
              <td> {offer.name}</td>
              <td>{offer.price}</td>
              <td> {offer.start}</td>
              <td>{offer.expiry}</td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OfferPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
    </div>
  );
};

export default OfferTable;