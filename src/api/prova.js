import axios from "axios";


export function getIngredient(){
    return axios
    .get("https://paninara.claudiodressadore.net/evomatic/API/product/ingredient/getArchiveIngredient.php")
    .then(res=> res.data)
}
export function getProduct(id) {
    return axios
        .get("https://paninara.claudiodressadore.net/evomatic/API/product/getProductUnfiltered.php", { 
            params: { 
                id: id
            }})
        .then(res => res.data)
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
