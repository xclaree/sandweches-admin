import React from "react";
import { IngredientData } from "./IngredientData";
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
import IngredientPopup from "./IngredientPopup";

const options = ["Modifica ingrediente", "Elimina ingrediente"];

export default function IngredientTable() {
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
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            stickyHeader
            aria-label="sticky table"
            style={{ background: "#FFF6E3" }}
          >
            <TableHead>
              <TableRow style={{ fontWeight: "600", background: "#FFF6E3" }}>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Nome
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                >
                  Allergeni
                </TableCell>
                <TableCell
                  align="left"
                  style={{ fontWeight: "600", background: "#FFF6E3" }}
                />
              </TableRow>
            </TableHead>
            <TableBody>
              {IngredientData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="left">{item.name} </TableCell>
                  <TableCell align="left">{item.allergen}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <IconButton onClick={handleClickOpen}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <IngredientPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </TableContainer>
      </IconContext.Provider>
    </>
  );
}
