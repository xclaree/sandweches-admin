import axios from "axios";



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

export function setLogin(email, password) {
  return axios
    .post("https://paninara.claudiodressadore.net/evomatic/API/user/login.php",
    {email: email, password: password}
    )
    .then((res) => res.data); //ritorna l'id della persona
}





export function getIngredient(){
    return axios
    .get("https://paninara.claudiodressadore.net/evomatic/API/product/ingredient/getArchiveIngredient.php")
    .then(res=> res.data)
}


    export function getArchiveOrder(){
        return axios
        .get("https://paninara.claudiodressadore.net/evomatic/API/order/getArchiveOrder.php")
        .then(res=> res.data)
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
        .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductAllergens.php/"+id,
        {
          headers: 
          {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(res=> res.data)
    }
    export function getNutritionalValue(id){
      return axios
      .get("https://paninara.claudiodressadore.net/evomatic/API/product/getNutritionalValue.php/"+id,
      {
        headers: 
        {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then(res=> res.data)
  }


  export function getProductCategory(id){
    return axios
    .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductCategory.php/"+id,
    {
      headers: 
      {
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(res=> res.data)
}
  
export function getProductIngredient(id){
  return axios
  .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductIngredients.php/"+id,
  {
    headers: 
    {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then(res=> res.data)
}
export function getProductTag(id){
  return axios
  .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductTags.php/"+id,
  {
    headers: 
    {
      "Access-Control-Allow-Origin": "*",
    },
  })
  .then(res=> res.data)
}
export function DeleteProduct(id,active) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/changeProductActive.php",
      {
        id: id,
        active: active,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}


export function modifyProductCategory(id,category) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/modifyProductCategory.php",
      {
        id: id,
        category: category,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}


    
export function modifyProductQuantity(id,quantity) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/modifyProductQuantity.php",
      {
        id: id,
        quantity: quantity,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}
export function modifyProductDescription(id,description) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/modifyProductDescription.php",
      {
        id: id,
        description: description,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}

export function modifyProductPrice(id,price) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/modifyProductPrice.php",
      {
        id: id,
        price: price,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}

export function modifyProductName(id,name) {
  return axios
    .post(
      "http://paninara.claudiodressadore.net/evomatic/API/product/modifyProductName.php",
      {
        id: id,
        name: name,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
    .then((res) => res.data);
}




    export function CreateIngredient(name, description, price, quantity) {
        return axios
          .post(
            "http://paninara.claudiodressadore.net/evomatic/API/product/ingredient/createIngredient.php",
            {
              name: name,
              description: description,
              price: price, 
              quantity: quantity,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => res.data);
      }

      export function modifyOfferProduct(id,price,expiry) {
        return axios
          .post(
            "http://paninara.claudiodressadore.net/evomatic/API/offer/modifyOffer.php",
            {
              id: id,
              price: price,
              expiry: expiry,
            },
            {
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((res) => res.data);
      }
