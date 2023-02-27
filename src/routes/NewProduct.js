import { margin } from "@mui/system";
import React, { useState } from "react";
import "../App.css";
import { ScrollView, View, Text } from "react-native";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getIngredient } from "../api/prova";

const categories = ["Panino", "Piadina", "Bibita","Snack","Dolce"]; //API QUI

const ingredients = [
  //API QUI
  "Pane",
  "Prosciutto",
  "Salame",
  "Mortadella",
  "Formaggio",
  "Bresaola",
];

function NewProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [ingredient, setIngredient] = useState(ingredients[0]);
  const [quantity, setQuantity] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [fat, setFat] = useState(0);
  const [saturedFat, setSaturedFat] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fiber, setFiber] = useState(0);
  const [salt, setSalt] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleIngredientClick = (index) => {
    const selectedIndex = selectedOptions.indexOf(index);
    let newSelectedOptions = [...selectedOptions];

    if (selectedIndex === -1) {
      newSelectedOptions.push(index);
    } else {
      newSelectedOptions.splice(selectedIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleQuantityIncrement = () => {
    if (quantity == 99) {
      setQuantity(99);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity == 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleKclaChange = (event) => {
    setKcal(parseInt(event.target.value));
  };
  const handleFatChange = (event) => {
    setFat(parseFloat(event.target.value));
  };
  const handleSaturedFatChange = (event) => {
    setSaturedFat(parseFloat(event.target.value));
  };
  const handleCarbohydrateChange = (event) => {
    setCarbohydrate(parseFloat(event.target.value));
  };
  const handleSugarChange = (event) => {
    setSugar(parseFloat(event.target.value));
  };
  const handleProteinChange = (event) => {
    setProtein(parseFloat(event.target.value));
  };
  const handleFiberChange = (event) => {
    setFiber(parseFloat(event.target.value));
  };
  const handleSaltChange = (event) => {
    setSalt(parseFloat(event.target.value));
  };
  const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const ingredientsQuery = useQuery({
    queryKey: ["ingredients"],
    queryFn: (obj) => {
      console.log(obj);
      return getIngredient();
    },
  });
  return (
    <>
      <div className="home">
        <h1>Aggiungi prodotto</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container" style={{ display: "flex" }}>
            <div>
              <label>
                Nome prodotto:
                <input
                  style={{ width: "300px" }}
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Inserire il nome del prodotto"
                />
              </label>
              <span></span>
              <label>
                Prezzo:
                <input
                  type="number"
                  step="0.01"
                  value={price}
                  onChange={handlePriceChange}
                  placeholder="Inserire il prezzo"
                  style={{ width: "150px" }}
                />
              </label>

              <span></span>
              <label>
                Categoria:
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  style={{ width: "auto" }}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>
              <span></span>
              <label>
                Quantità:
                <div>
                  <input
                    type="number"
                    min="0"
                    max="99"
                    value={quantity}
                    onChange={handleQuantityChange}
                    style={{ textAlign: "center" }}
                  />

                  <button
                    style={{ width: "40px", fontWeight: "bold" }}
                    className="btn-form"
                    onClick={handleQuantityIncrement}
                  >
                    +
                  </button>

                  <button
                    style={{ width: "40px", fontWeight: "bold" }}
                    className="btn-form"
                    onClick={handleQuantityDecrement}
                  >
                    -
                  </button>
                </div>
              </label>
            </div>
            <span style={{ width: "90px" }}></span>
            <div>
              <div style={{ display: "flex" }}>
                <label>
                  Descrizione:
                  <textarea
                    style={{ width: "300px", resize: "none" }}
                    value={description}
                    onChange={handleDescriptionChange}
                    placeholder="Inserire una breve descrizione del prodotto"
                  />
                </label>
                <span style={{ width: "100px" }}></span>
                <div>
                  <a>Scegli ingredienti</a>
                  <div
                    style={{
                      height: "130px",
                      width: "200px",
                      overflowY: "scroll",
                    }}
                  >
                    {ingredients.map((ingredient, index) => (
                      <div key={index}>
                        <input
                          type="checkbox"
                          checked={selectedOptions.includes(index)}
                          onChange={() => handleIngredientClick(index)}
                        />
                        {ingredient}
                      </div>
                    ))}
                    {/* <p>Selected options indexes: {selectedOptions.join(", ")}</p> */}
                  </div>
                </div>
              </div>
              <span></span>

              <div>Valori nutrizionali: </div>

              <div className="nutritional-values">
                <label>
                  kcal
                  <input
                    type="number"
                    min="0"
                    value={kcal}
                    onChange={handleKclaChange}
                  />
                </label>

                <label>
                  Grassi
                  <input
                    type="number"
                    min="0"
                    pattern="^\d*(\.\d{0,2})?$"
                    value={fat}
                    onChange={handleFatChange}
                  />
                </label>

                <label>
                  Grassi saturi
                  <input
                    type="number"
                    min="0"
                    value={saturedFat}
                    onChange={handleSaturedFatChange}
                  />
                </label>

                <label>
                  Carboidrati
                  <input
                    type="number"
                    min="0"
                    value={carbohydrate}
                    onChange={handleCarbohydrateChange}
                  />
                </label>
              </div>
              <div className="nutritional-values">
                <label>
                  Zuccheri
                  <input
                    type="number"
                    min="0"
                    value={sugar}
                    onChange={handleSugarChange}
                  />
                </label>

                <label>
                  Proteine
                  <input
                    type="number"
                    min="0"
                    value={protein}
                    onChange={handleProteinChange}
                  />
                </label>

                <label>
                  Fibre
                  <input
                    type="number"
                    min="0"
                    value={fiber}
                    onChange={handleFiberChange}
                  />
                </label>

                <label>
                  Sale
                  <input
                    type="number"
                    min="0"
                    value={salt}
                    onChange={handleSaltChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <button className="submit" type="submit">Aggiungi</button>
        </form>
      </div>
    </>
  );
}

export default NewProduct;
/*
manca mettere API crea prodotto
*/
