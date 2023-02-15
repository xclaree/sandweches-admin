import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../App.css";
import OrderPopup from "./OrderPopup";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const options = ["Dettagli ordine", "Modifica stato", "Elimina ordine"];

function GetColorStatus(status) {
  switch (status) {
    case "pronto":
      return "green";
    case "ordinato":
      return "orange";
    case "annullato":
      return "red";
  }
  return "red";
}

const items = [
  {
    user: "Baleanu Valeria",
    created: "20/02/2023 10:02:00",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "ordinato",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "annullato",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
  {
    user: "5E",
    created: "20/02/2023 10:02:00",
    total: "$20",
    pickup: "Settore A itis",
    break: "9:30",
    status: "pronto",
  },
];

const queryClient = new QueryClient();

function fetchArchiveOrder() {
  return axios
    .get("http://localhost/evomatic/API/order/GetArchiveOrder.php")
    .then((response) => response.data);
}

function useArchiveOrder() {
  return useQuery("archiveOrder", { queryFn: fetchArchiveOrder });
}

function useArchiveOrderData() {
  const { data, isLoading } = useArchiveOrder();
  return { data, isLoading };
}

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

  const { data, isLoading } = useArchiveOrderData();

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
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
          </table>
          <span></span>
          <div className="loading">
            <div colSpan={4}>
              <div className="loading-animation" />
            </div>
          </div>
        </div>
      ) : (
        <div className="table-container">
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
              {data &&
                data.map((item) => (
                  <tr key={item.id}>
                    <td
                      style={{
                        color: GetColorStatus(item.status),
                        fontWeight: "600",
                      }}
                    >
                      {item.status.toUpperCase()}
                    </td>
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
      )}
    </QueryClientProvider>
  );
};

export default OrderData;