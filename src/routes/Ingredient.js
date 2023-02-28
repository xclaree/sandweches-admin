import React from "react";
import IngredientTable from "../components/IngredientTable";
import { NavLink } from "react-router-dom";


function Ingredient() {
    return (
        <>
            <div className="home" >
                <div>
                    <h1>Ingredient</h1>
                </div>
                <span></span>
                <NavLink to="/newingredient">
                <div className="addProduct">
                <h2 style={{ color: "#000"}}> Add Ingredient </h2> </div>
                </NavLink>
                <div className="ingredient-list">
                    <div>
                        <IngredientTable /> 
                    </div>

                </div>
            </div>

        </>
    )
}

export default Ingredient;
