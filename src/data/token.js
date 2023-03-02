import { useState } from "react";

function useToken() {
  const getToken = () => {
    let userToken;
    const tokenString = localStorage.getItem("token");
    try{
    userToken = JSON.parse(tokenString);
    } catch{
      localStorage.removeItem('token');
      userToken = null;
    }
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}

export default useToken;
