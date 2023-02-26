import axios from "axios";

export function getIngredient() {
  return axios
    .get(
      "https://paninara.claudiodressadore.net/evomatic/API/product/ingredient/getArchiveIngredient.php"
    )
    .then((res) => res.data);
}

export function getProduct(id) {
  return axios
    .get(
      "https://paninara.claudiodressadore.net/evomatic/API/product/getProductUnfiltered.php",
      {
        params: {
          id: id,
        },
      }
    )
    .then((res) => res.data);
}

export function getArchiveOrder() {
  return axios
    .get(
      "https://paninara.claudiodressadore.net/evomatic/API/order/getArchiveOrder.php"
    )
    .then((res) => res.data);
}

export function setLogin(email, password) {
  return axios
    .post("https://paninara.claudiodressadore.net/evomatic/API/user/login.php",
    {email: email, password: password}
    )
    .then((res) => res.data); //ritorna l'id della persona
}

export function getArchiveProduct(){
  return axios
  .get("https://paninara.claudiodressadore.net/evomatic/API/product/getArchiveProductUnfiltered.php")
  .then(res=>res.data)
}

export function getArchiveOffer(){
  return axios
  .get("https://paninara.claudiodressadore.net/evomatic/API/offer/getArchiveOffer.php")
  .then(res=>res.data)
}
