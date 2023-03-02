import { margin } from '@mui/system';
import React, { useState } from 'react';
import '../App.css';
import { ScrollView, View, Text } from 'react-native';
import { useQuery, useMutation } from "@tanstack/react-query";
import {getArchiveProduct} from "../api/prova";


function NewOffer(){
    const [price, setPrice] = useState('');
    const [start_data, setStartData] = useState('');
    const [start_time, setStartTime] = useState('');
    const [expiry_data, setExpiryData] = useState('');
    const [expiry_time, setExpiryTime] = useState('');
    const [description, setDescription] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    let cnt=0;
    let idprodotti=[];

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
      };

      const handleStartData=(event) =>{
        setStartData(event.target.value)
      };

      const handleStartTime=(event) =>{
        setStartTime(event.target.value)
      };

      const handleExpiryData=(event) =>{
        setExpiryData(event.target.value)
      };

      const handleExpiryTime=(event) =>{
        setExpiryTime(event.target.value)
      };
      const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
      };

      const productQuery = useQuery({
        queryKey: ["products"],
        queryFn: (obj) => {
            console.log(obj);
          return getArchiveProduct()
        }                               
      })                             

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


    return(
    <div className="home">
        <h1>Add Offer</h1>
        <label style={{position:'fixed', top:"20%",  left: "25%"}}>
          Price:
          <input type="number" step="0.01" value={price} onChange={handlePriceChange} />
        </label>
        <br />
        <label style={{position:'fixed', top:"30%",  left: "25%"}}>
          Start:
          <input type="date" step="0.01" value={start_data} onChange={handleStartData} />
          <input type="time" step="60" value={start_time} onChange={handleStartTime}  />
        </label>
        <br />

        <label style={{position:'fixed', top:"40%",  left: "25%"}}>
          Expiry:
          <input type="date" step="0.01" value={expiry_data} onChange={handleExpiryData} />
          <input type="time" step="60" value={expiry_time} onChange={handleExpiryTime} />
        </label>
        <br />

        <label style={{position:'fixed', top:"28%",  left: "45%"}}>
          Description:
          <textarea  value={description}  onChange={handleDescriptionChange} style={{resize: 'none'}} />
        </label>
        <br />
        <div>
        <label style={{position:"fixed", top:"23%", right:"30%"}}>Prodotti</label>
        <div
         style={{
          height: "200px",
           width: "500px",
          overflowY: "scroll",
          position: "fixed",
          right:"10%",
          top:"28%"
               }}
        >
            {productQuery.data?.map(product=>(
            <View key={product.id} {...idprodotti[cnt]=product.id}{...cnt++}>
           <span> 
            <input type="checkbox" defaultChecked={false} disabled={false} style={{margin:"10px"}} />
            </span> 
           <span> <label style={{paddingBottom:"5px"}}> {product.name} </label> 
            </span> 
            </View>
            ))} 
            {console.log(idprodotti)}
        </div>
        </div>
        <button type="submit" style={{position:'fixed', bottom:"5%",  left: "48%", }} className="submit_button"><h2>Submit</h2></button>
    </div>
    )
}

export default NewOffer;
