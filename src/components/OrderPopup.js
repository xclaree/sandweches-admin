import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Modal } from '@mui/material';
import "../App.css";

const options = ["Dettagli ordine", "Modifica stato", "Elimina ordine"];

function OrderPopup(props) {
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
      aria-labelledby="simple-dialog-title"
      sx={{ '& .MuiBackdrop-root': { backgroundColor: 'transparent' },
    boxShadow: 'none' }}
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

OrderPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default OrderPopup;
