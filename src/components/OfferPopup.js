import * as React from "react";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import "../App.css";

const options = ["Modifica Offerta", "Elimina Offerta"];

function OfferPopup(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
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
        style: { borderRadius: 20, position: 'initial' }   
      }}
      
      
    >
      <List sx={{ pt: 0 }}>
        {options.map((item) => (
          <ListItem>
            <ListItemButton
              onClick={() => handleListItemClick(item)}
              key={item}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

OfferPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default OfferPopup;
