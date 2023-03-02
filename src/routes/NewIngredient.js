import { margin } from '@mui/system';
import React, { useState } from 'react';
import '../App.css';
import { ScrollView, View, Text } from 'react-native';
import { useQuery, useMutation } from "@tanstack/react-query";
import {CreateIngredient} from "../api/prova";

function NewIngredient(){
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
    
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };
    
    
      const handlePriceChange = (event) => {
        setPrice(event.target.value);
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

      function NewIngredient(_name,_description,_price,_quantity){
         const CreateIngredientQuery= useQuery({
            queryKey: ["ingredients"],
            queryFn: (obj) => {
                console.log(obj);
              return CreateIngredient(_name,_description,_price,_quantity)
            }                               
          }) 
      }

    return (
        <div className="home">
            <h1>Add Ingredient</h1>

            <div>
        <label style={{position:'fixed', top:"30%",  left: "30%"}}>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        </div>
        <br />
        <label style={{position:'fixed', top:"28%",  right: "30%"}}>
          Description:
          <textarea  value={description}  onChange={handleDescriptionChange} style={{resize: 'none'}} />
        </label>
        <br />
        <label style={{position:'fixed', bottom:"41%",  left: "35%"}}>
          Price:
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label style={{position:'fixed', bottom:"41%",  right: "32%"}}>
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
        <button type="submit" style={{position:'fixed', bottom:"5%",  left: "50%", }} className="submit_button"
        onClick={NewIngredient(name,description,price,quantity)}>
            <h2>Submit</h2>
            </button>
        </div>
    )
}

export default NewIngredient;
