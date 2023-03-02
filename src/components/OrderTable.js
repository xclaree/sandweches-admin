import React, { useState, useEffect } from "react";
import axios from "axios";
import { Icon, IconButton, Tooltip } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import "../App.css";
import { deleteOrder, getArchiveOrder, setStatusReadyOrder } from "../api/prova";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { NavLink, useHistory } from "react-router-dom";
import OrderDetails from "../routes/OrderDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

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

const queryClient = new QueryClient();

const OrderData = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);
  const [isLoading, setLoading] = useState(true);

  async function handleDeleteOrder(id) {
    const result = await deleteOrder(id).then(() => {
      ArchiveOrderQuery.refetch();
    });
  };

  function handleStatusOrder(id,status) {
    const result = setStatusReadyOrder(id, status).then(() => {
      ArchiveOrderQuery.refetch();
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const ArchiveOrderQuery = useQuery({
    queryKey: ["order"],
    queryFn: (obj) => {
      console.log(obj);
      setLoading(false);
      return getArchiveOrder();
    },
  });

  if (ArchiveOrderQuery.status === "error") {
    return <a>Errore nella visualizzazione degli ordini, riprova più tardi</a>; //mai far vedere l'errore, piuttosto lo mettiamo in log
  }

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
                <th>Opzioni</th>
              </tr>
            </thead>
            <tbody>
              {ArchiveOrderQuery.data &&
                ArchiveOrderQuery.data.map(
                  (
                    item //se vuoi provare le api metti ArchiveOrderQuery.data.map
                  ) => (
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
                        <Tooltip title="Elimina Ordine">
                        <IconButton onClick={() => handleDeleteOrder(item.id)}>
                          <DeleteIcon />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title="Contrassegna come in esecuzione">
                          <IconButton onClick={() => handleStatusOrder(item.id,1)}>
                            <RotateLeftIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Contrassegna come pronto">
                        <IconButton onClick={() => handleStatusOrder(item.id,2)}>
                          <DoneAllIcon />
                        </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
          {/* <OrderPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          /> */}
        </div>
      )}
    </QueryClientProvider>
  );
};

export default OrderData;
