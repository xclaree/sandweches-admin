

import "../App.css";
import React, { useState } from 'react';



function showLastPwd() {
    var input = document.getElementById('last_pwd');
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }
  function showNewPwd() {
    var input = document.getElementById('new_pwd');
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  }

function ResetPassword(){
    const [Previous_password, setPrevious_password] = useState('');
    const [New_password, setNew_password] = useState('');
    
    const handlePreviousPasswordChange = (event) => {
        setPrevious_password(event.target.value);
      };

      const handleNewPasswordChange = (event) => {
        setNew_password(event.target.value);
      };


    return(
        <div className="home">
            <h1> REIMPOSTA PASSWORD</h1>
            <div>             
            <label className="lbprevious_password"  >Previous Password</label>
              <input name="user_last_password" type="password" value={Previous_password} size="40" maxlength="200" onChange={handlePreviousPasswordChange} className="input_user_last_password"  id="last_pwd"/>
              <div className="show_hide_previous_password" onClick={showLastPwd}>
                Show/hide
              </div>
            </div>
            <div>
            <label className="lbnew_password" >New Password</label>
            <input name="user_new_password" type="password" value={New_password} size="40" maxlength="200" onChange={handleNewPasswordChange} className="input_user_new_password" id="new_pwd"/>
            <div className="show_hide_new_password" onClick={showNewPwd}>
                Show/hide
              </div>
            </div>
            <div className="botton_new_password">
                <h3 style={{ color: "#000"}}>  Change Password </h3>
            </div>
        </div>
    );
}
 export default ResetPassword;
 
