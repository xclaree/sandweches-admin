import React, { useState, useEffect } from "react";
import axios from "axios";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../App.css';
import IngredientPopup from './IngredientPopup';

const options = ["Modifica ingrediente", "Elimina ingrediente"];


const items = [   //sarà il risultato della API

    {
        name: "Mortadella",
        allergen: "Pistacchio",
    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Salame",
        allergen: "Pepe",
    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",
       
    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },
    {
        name: "Prosciutto",
        allergen: "Pistacchio",

    },{
        name: "Prosciutto",
        allergen: "Pistacchio",

    },{
        name: "Prosciutto",
        allergen: "Pistacchio",

    }
];

const IngredientTable = () => {
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
      .get("http://localhost/evomatic/API/order/GetArchiveOrder.php")
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
            <th>Nome</th>
            <th>Allergeni</th>
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
    <div className="table-container">
      <table>
        <thead>
          <tr>
          <th>Nome</th>
            <th>Allergeni</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.allergen}</td>
              <td>
                <IconButton onClick={handleClickOpen}>
                  <MoreVertIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <IngredientPopup
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
    </div>
  );
};

export default IngredientTable;
