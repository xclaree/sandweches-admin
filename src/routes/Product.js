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
                <h1> Aggiungi prodotto </h1>
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

