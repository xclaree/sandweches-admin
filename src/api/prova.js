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
    .post(
      "http://paninaraviolaitis.altervista.org/evomatic/API/user/login.php",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
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

export function getProductAllergens(id){
  return axios
  .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductAllergens.php",
  {
    params: {
      id: id
    }
  })
  .then(res=> res.data)
}

export function getUser(id){
  return axios
  .get("http://paninaraviolaitis.altervista.org/evomatic/API/user/getUser.php/6",)
  .then((res)=> res.data)
}

export function createProduct(name, price, description, quantity, category, ingredients, tags, nutritional_values){
  return axios
  .post("https://paninara.claudiodressadore.net/evomatic/API/product/createProduct.php",
  {
    name: name, price: price, description: description, quantity: quantity, category: category, ingredients: ingredients,
    tags: tags, nutritional_values: nutritional_values
  })
  .then((res)=> res.data)
}
