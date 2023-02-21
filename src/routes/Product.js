import { display } from "@mui/system";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import ProductTable from "../components/ProductTable";
import App from './NewProduct';

function Product() {
    return (
        <div className="home" >
            <h1>Prodotto</h1>
            <NavLink className="add-product" to='/newproduct'>
            <div className="addProduct"> <h2 style={{ color: "#000"}}> Add Product </h2> </div>
            </NavLink>
            <div>
                <div>
                    <ProductTable />
                </div>
            </div>
        </div>
    )
}
export default Product;



