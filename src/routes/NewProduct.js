import { margin } from '@mui/system';
import React, { useState } from 'react';
import '../App.css';
import { ScrollView, View, Text } from 'react-native';
import { useQuery, useMutation } from "@tanstack/react-query";
import {getIngredient} from "../api/prova";

const categories = ["Category 1", "Category 2", "Category 3"];

function NewProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [quantity, setQuantity] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [fat, setFat] = useState(0);
  const [saturedFat, setSaturedFat] = useState(0);
  const [carbohydrate, setCarbohydrate] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [protein, setProtein]= useState(0);
  const [fiber, setFiber] = useState(0);
  const [salt, setSalt] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

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


  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));
  };


  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };


  const handleQuantityDecrement = () => {
    setQuantity(quantity - 1);
  };


  const handleKclaChange = (event) => {
    setKcal(parseInt(event.target.value))
  }
  const handleFatChange = (event) => {
    setFat(parseInt(event.target.value))
  }
  const handleSaturedFatChange = (event) => {
    setSaturedFat(parseInt(event.target.value))
  }
  const handleCarbohydrateChange = (event) => {
    setCarbohydrate(parseInt(event.target.value))
  }
  const handleSugarChange = (event) => {
    setSugar(parseInt(event.target.value))
  }
  const handleProteinChange = (event) => {
    setProtein(parseInt(event.target.value))
  }
  const handleFiberChange = (event) => {
    setFiber(parseInt(event.target.value))
  }
  const handleSaltChange = (event) => {
    setSalt(parseInt(event.target.value))
  }
    const handleItemPress = (item) => {
    setSelectedItem(item);
  };

  const ingredientsQuery = useQuery({
    queryKey: ["ingredients"],
    queryFn: (obj) => {
        console.log(obj);
      return getIngredient()
    }                               
  }) 
  return (
    <div className='home'>
      <form onSubmit={handleSubmit}>
          <h1 style={{position:'fixed', top:"2%",  left: "17%"}} >ADD PRODUCT</h1>
        <div>
        <label style={{position:'fixed', top:"7%",  right: "40%"}}>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        </div>
        <br />
        <label style={{position:'fixed', top:"18%",  left: "35%"}}>
          Description:
          <textarea  value={description}  onChange={handleDescriptionChange} style={{resize: 'none'}} />
        </label>
        <br />
        <label style={{position:'fixed', top:"21%",  right: "33.7%"}}>
          Price:
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label style={{position:'fixed', top:"35%",  left: "35%"}}>
          Category:
          <select value={category} onChange={handleCategoryChange}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label style={{position:'fixed', top:"35%",  right: "30%"}}>
          Quantity:
          <div>
            <input type="number" min="0" max="99" value={quantity} onChange={handleQuantityChange} />
            <button type="button" onClick={handleQuantityIncrement}>
              +
            </button>
            <button type="button" onClick={handleQuantityDecrement}>
              -
            </button>
          </div>
        </label>
        <br />
        <div className='addIngredient'>
          <h3>INGREDIENTI</h3>
          <ScrollView horizontal={true}> {ingredientsQuery.data?.map(ingredient=>(
            <View key={ingredient.id}>
            <label style={{margin:"20px"}}>
            <input type="radio" defaultChecked={false} disabled={false} /*value={ingredientSelect}*/ />
            {ingredient.name} {console.log(ingredientsQuery.data)}
            </label>
            </View>
            ))} </ScrollView>
        </div>

          <div className='infoValoriNutrizionali' >
          <label className='lbNutritionalValues'>
          NUTRITIONAL VALUES
          </label>
            <div className='infoKcal' >
          <label>
            KCAL
          <input type="number" min="0" value={kcal} onChange={ handleKclaChange} />
          </label>    
            </div>

            <div className='infoFat'>
            <label>
           FAT
           <input type="number" min="0" value={fat} onChange={ handleFatChange} />
          </label>
            </div>
         
          <div className='infoSaturedFat'>
          <label>
            SATURED FAT
            <input type="number" min="0" value={saturedFat} onChange={ handleSaturedFatChange} />
          </label>
          </div>


          <div className='infoCarbohydrate'>
          <label>
            CARBOHYDRATE
            <input type="number" min="0" value={carbohydrate} onChange={ handleCarbohydrateChange} />
          </label>
          </div>


            <div className='infoSugar'>
            <label>
            SUGAR
            <input type="number" min="0" value={sugar} onChange={ handleSugarChange} />
          </label>
            </div>


            <div className='infoProtein'>
            <label>
            PROTEIN
            <input type="number" min="0" value={protein} onChange={ handleProteinChange} />
          </label>
            </div>


            <div className='infoFiber'>
            <label>
            FIBER
            <input type="number" min="0" value={fiber} onChange={ handleFiberChange} />
          </label>
            </div>

            <div className='infoSalt'>
            <label>
            SALT
            <input type="number" min="0" value={salt} onChange={ handleSaltChange} />
          </label>
            </div>
         
          </div>
        <button type="submit" style={{position:'fixed', bottom:"5%",  right: "41%", }}>Submit</button>
      </form>
    </div>
  );
}


export default NewProduct;
/*
manca mettere API crea prodotto
manca la selkezione e deselezione del prodotto
manca centrare label ingredienti, satured fat e Carbohydrate
*/


