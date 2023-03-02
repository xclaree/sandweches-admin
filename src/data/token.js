import { useState } from "react";

function useToken() {

  const getToken = () => {
    const token = localStorage.getItem("token");
    const userToken = JSON.parse(token);
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