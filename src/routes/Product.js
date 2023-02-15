import { display } from "@mui/system";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import App from'./NewProduct';

function Product(){
    return(
<NavLink className="home" to='/newproduct'>
              <h1>Product</h1>                    
                <div className="add-product">
                    <h1> Add ingredient </h1>
                </div>
            <div>
                <label class="label" >Nome</label>
                <label class="label"> Prezzo</label>
                <label class="label"> Stato</label>
            </div> 
        </NavLink> 
    )
}
export default Product;
