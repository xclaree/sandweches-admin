import { display } from "@mui/system";
import React from "react";


function Product(){
    return(
        <div className="New_Product">
        <h1 className="add_Product_Label">Add Product </h1>
        <div>
            <h4 className="label_informazione_prodotto">NAME</h4>
        </div>
        <div>
            <input name="productName" type="text" value="nome prodotto" size="40" maxlength="200" className="input_Product_Name" />
        </div>
        
        <div>
        <h4 className="label_product_description">DESCRIPTION</h4>
        </div>
        <div>
        <input name="description" type="text" value="descrizione prodotto" size="40" maxlength="200" className="input_Product_Description" />
        </div>
  
        <div>
        <h4 className="label_product_price">PRICE</h4>
        </div>
        <div>
        <input name="price" type="number" value="prezzo prodotto" size="40" maxlength="200" className="input_Product_Price" />
        </div>
  
        <div>
        <h4 className="label_product_category">CATEGORY</h4>
        </div>
        <div>
          <select className="input_product_category">
          <option value="opzione1">Panino</option>
          <option value="opzione2">Snack</option>
          <option value="opzione3">Bevanda</option>
          <option value="opzione4">Piadina</option>
          <option value="opzione5">Dolce</option>
          </select>
        </div>
  
        <div>
        <h4 className="label_product_quantity">QUANTITY</h4>
        </div>
        <div>
        <input name="quantity" type="number" value="quantita prodotto" size="40" maxlength="200" className="input_Product_Quantity" />
        </div>
        <button className="bottom_Add"> + </button>
        <button className="botoom_Minus"> - </button>
  
        <div>
          <h5 className="nutritional_values_label"> NUTRITION VALUES</h5>
        </div>
  
        <div>
        <h4 className="label_product_Kcal">KCAL</h4>
        </div>
        <div>
        <input name="KCAL" type="number" value="KCAL prodotto" size="40" maxlength="200" className="input_Product_KCAL" />
        </div>
  
        <div>
        <h4 className="label_product_fat">FAT</h4>
        </div>
        <div>
        <input name="FAT" type="number" value="FAT prodotto" size="40" maxlength="200" className="input_Product_Fat" />
        </div>
  
        <div>
        <h4 className="label_product_satured_fat">SATURED FAT</h4>
        </div>
        <div>
        <input name="SATURED FAT" type="number" value="SATURED FAT prodotto" size="40" maxlength="200" className="input_Product_Satured_Fat" />
        </div>
  
        <div>
        <h4 className="label_product_carbohydrate">CARBOHYDRATE</h4>
        </div>
        <div>
        <input name="CARBOHYDRATE" type="number" value="CARBOHYDRATE prodotto" size="40" maxlength="200" className="input_Product_Carbohydrate" />
        </div>
  
        <div>
        <h4 className="label_product_sugar">SUGAR</h4>
        </div>
        <div>
        <input name="sugar" type="number" value="sugar prodotto" size="40" maxlength="200" className="input_Product_Sugar" />
        </div>
  
        <div>
        <h4 className="label_product_protein">PROTEIN</h4>
        </div>
        <div>
        <input name="PROTEIN" type="number" value="protein prodotto" size="40" maxlength="200" className="input_Product_Protein" />
        </div>
  
        <div>
        <h4 className="label_product_Fiber">FIBER</h4>
        </div>
        <div>
        <input name="FIBER" type="number" value="fiber prodotto" size="40" maxlength="200" className="input_Product_Fiber" />
        </div>
  
        <div>
        <h4 className="label_product_Salt">SALT</h4>
        </div>
        <div>
        <input name="SALT" type="number" value="salt prodotto" size="40" maxlength="200" className="input_Product_salt" />
        </div>
  
  
    </div>
    )
}
/*centrare le scritte nel bottone */
/*Posizionare le3 label in centro*/ 


export default Product;