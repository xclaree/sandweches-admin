import { display } from "@mui/system";
import React from "react";
import { Link, NavLink } from 'react-router-dom';
import ProductTable from "../components/ProductTable";
import App from './NewProduct';
import { useQuery, useMutation } from "@tanstack/react-query";
import {getIngredient} from "../api/prova";




function Product() {
    
    return (
        <div className="home">
            <h1> PRODUCT </h1>
            <NavLink className="add-product" to='/newproduct'>
                <div className="addProduct"> Add Product </div>
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

