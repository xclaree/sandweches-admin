import React from "react";
import { OrderData } from "./OrderData";
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
import { FitScreen } from "@mui/icons-material";

const options = ["Dettagli ordine", "Modifica stato", "Elimina ordine"];

function Order() {
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
      <IconContext.Provider>
        <TableContainer sx={{ maxHeight: '60vh' }}
        >
          <Table
            stickyHeader
            style={{ background: "#FFF6E3" }}
          >
            <TableHead>
              <TableRow style={{ fontWeight: "600", background: "#FFF6E3" }}
              >
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Stato
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
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
              {OrderData.map((item, index) => (
                <TableRow
                  key={index}
                >
                  <TableCell align="left">{item.stringOrderStatus} </TableCell>
                  <TableCell align="left">{item.customer}</TableCell>
                  <TableCell align="left">{item.total}</TableCell>
                  <TableCell align="left">{item.pickup}</TableCell>
                  <TableCell align="left">{item.break}</TableCell>
                  <TableCell>
                    <IconButton onClick={handleClickOpen}>
                      <MoreVertIcon />
                    </IconButton>

                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
          <OrderPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </TableContainer>
      </IconContext.Provider>
    </>
  );
}

export default Order;
