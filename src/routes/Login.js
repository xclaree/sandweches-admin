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
            <h1>LOGIN</h1>                    
            <label className="label_login_in_your_account">Log in your account</label>
            <div>
            <input name="user_email" type="text" value="Email" size="40" maxlength="200" className="input_user_email" />
            </div>
            <div>
            <input name="user_password" type="text" value="Password" size="40" maxlength="200" className="input_user_password" />
            </div>
            <div className="button_login">
                Log in
            </div>
            <label className="label_forget_password">Forget your password</label>
        </div> 
    )
}
export default Product;
