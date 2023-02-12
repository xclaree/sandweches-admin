import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import { IconContext } from "react-icons";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import OrderPopup from "./OrderPopup";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Inter',
      fontWeight: '600w'
    },
  },
});

const options = ["Dettagli ordine", "Modifica stato", "Elimina ordine"];

function Order() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const orderData = async () => {
      const response = await fetch(
        "http://localhost/evomatic/API/order/GetArchiveOrder.php"
      );
      const data = await response.json();
      setData(Object.values(data));
    };
    orderData();
  }, []);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(options[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <IconContext.Provider>
        <TableContainer sx={{ maxHeight: "65vh" }}>
          <Table stickyHeader style={{ background: "#FFF6E3" }}>
            <TableHead>
              <TableRow style={{ fontWeight: "600", background: "#FFF6E3" }}>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Stato
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3"}}
                >
                  Destinatario
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Totale
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Pickup
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Orario
                </TableCell>
                <TableCell
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((order, index) => {
                return (
                  <TableRow key={index}>
                  <TableCell align="left">{order.id}</TableCell>
                  <TableCell align="left">{order.total}</TableCell>
                  <TableCell align="left">{order.pickup}</TableCell>
                  <TableCell align="left">{order.break}</TableCell>
                  <TableCell>
                    <IconButton onClick={handleClickOpen}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                );
                })}
            </TableBody>
          </Table>
          <OrderPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </TableContainer>
      </IconContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default Order;
