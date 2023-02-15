import { display } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';
import App from'./NewProduct';
    const nextPage = () => {
      window.location.href = "./NewProduct.js";
    }
function Product(){
    return(
<div className="home" onClick={nextPage}>
              <h1>Product</h1>                    
                <div className="add-product">
                    <h1> Add ingredient </h1>
                </div>
            <div>
                <label class="label" >Nome</label>
                <label class="label"> Prezzo</label>
                <label class="label"> Stato</label>
            </div> 
        </div> 
    )
}
export default Product;
