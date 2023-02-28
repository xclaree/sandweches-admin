import { display } from "@mui/system";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import ProductTable from "../components/ProductTable";
import App from './NewProduct';
import '../App.css'

function Product() {
    return (
        <div className="home" >
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <div><h1>Prodotto</h1></div>
            <NavLink to='/newproduct'>
            <div className="add-product">
            <div className="addProduct"> 
            <h2 style={{ color: "#000"}}> Add Product </h2> </div>
            </div>
            </NavLink>
            </div>
            <div>
                <div>
                    <ProductTable />
                </div>
            </div>
        </div>
    )
}
export default Product;





