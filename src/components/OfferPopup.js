import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from 'react';
import Dialog from "@mui/material/Dialog";
import "../App.css";
import { useQuery, useMutation } from "@tanstack/react-query";
import {modifyOfferProduct} from "../api/prova";



const OfferPopup = props => {
  const { onClose, selectedValue, open } = props;
  const idScelto=props.selected_id;
  const expiryScelto= props.selected_expiry;
  const priceScelto= props.selected_price;
  const nomeScelto= props.selected_name;
  const [price, setPrice] = useState('');
  const [expiry_data, setExpiryData] = useState('');
  const [expiry_time, setExpiryTime] = useState('');


  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  const handleExpiryData=(event) =>{
    setExpiryData(event.target.value)
  };

  const handleExpiryTime=(event) =>{
    setExpiryTime(event.target.value)
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };



  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent', borderRadius: '60px' },
      "& .MuiDialog-container": {
        alignItems: "flex-start"
      }, boxShadow: 'none'
      }}
      PaperProps={{
        style: { borderRadius: 20, position: 'initial', height:"600px", width:"900px" }   
      }} 
    >

      <h1 style={{position:'fixed', top:"5%",left: "36%"}}>Modifica Offerta</h1>
      <div style={{position:"fixed", top:"15%", left:"36%"}}>
        <h2>Prodotto in offerta:{nomeScelto}</h2>
      </div>

      <div>
      <label style={{position:'fixed', top:"24%",  left: "40%"}}>
          Price:
          <label style={{position:'fixed', top:"24%",  left: "43%"}}>{priceScelto}£ </label>
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} style={{position:'fixed', top:"29%",  left: "40%"}} />

        </label>
        <br />
      </div>

<div>
        <label style={{position:'fixed', top:"24%",  right: "45%"}}>
          Expiry:
          <label style={{position:'fixed', top:"24%",  right: "36%"}}>{expiryScelto} </label>
          <input type="date" step="0.01" value={expiry_data} onChange={handleExpiryData} style={{position:'fixed', top:"29%",  right: "42%"}} />
          <input type="time" step="60" value={expiry_time} onChange={handleExpiryTime} style={{position:'fixed', top:"32%",  right: "44.5%"}} />
        </label>
</div>
        <br />

        <button type="submit" style={{position:'fixed', bottom:"41%",  left: "42%" }} className="submit_button" ><h2>Change Value</h2></button>

    </Dialog>
  );
}

OfferPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default OfferPopup;
