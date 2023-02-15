import { display } from "@mui/system";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import App from'./NewProduct';

function Product(){
    return(
<div className="home" >
              <h1>Product</h1>                    
                <NavLink className="add-product" to='/newproduct'>
                    <h1> Add ingredient </h1>
                </NavLink>
            <div>
                <label class="label" >Nome</label>
                <label class="label"> Prezzo</label>
                <label class="label"> Stato</label>
            </div> 
        </div> 
    )
}
export default Product;
