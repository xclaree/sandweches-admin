import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import "../App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
const options = ["Modifica Prodotto","Dettagli Prodotto"];


function ProductPopup(props, id, name) {
  const [selectedOption, setSelectedOption] = useState(null);
  const { onClose, selectedValue, open } = props;
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
    console.log("aaaaaaaa");
    console.log(index);
  };

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  function handleOptionSelect(option) {
    setSelectedOption(option);
  }

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
        style: { borderRadius: 20, position: 'initial' }   
      }}
      
      
    >
      <List sx={{ pt: 0 }}>
        {options.map((item) => (
          <NavLink to = {{ pathname: "/"+ item, state:{id,name}}}>
          <ListItem onClick={()=> handleRowClick()}>***********************
            <ListItemButton
              onClick={() => handleListItemClick(item)}
              key={item}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
    </Dialog>
  );
}

ProductPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default ProductPopup;
/**react data gread */
