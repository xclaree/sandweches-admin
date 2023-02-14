import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import OrderPopup from './OrderPopup';

const options = ["Dettagli ordine", "Modifica stato", "Elimina ordine"];

const items = [
  {
    user: "Baleanu Valeria",
    created: "20/02/2023 10:02:00",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
  },
];

const OrderData = () => {
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

  useEffect(() => {
    axios
      .get("https://localhost/evomatic/API/order/GetArchiveOrder.php")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return loading ? (
    <div>
      <table>
        <thead>
          <tr>
            <th>Stato</th>
            <th>Destinatario</th>
            <th>Creazione</th>
            <th>Pickup</th>
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
    <div  className="table-container">
      <table>
        <thead>
          <tr>
            <th>Stato</th>
            <th>Destinatario</th>
            <th>Creazione</th>
            <th>Pickup</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.user}</td>
              <td>{item.created}</td>
              <td>{item.pickup}</td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <OrderPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
    </div>
  );
};

export default OrderData;
