
import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant"

export function getProductList() {
    // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // data = await data.json();
    console.log("Get Product list action in called")
    return {
        type: PRODUCT_LIST
    }
}

export function searchProduct(query) {
    // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // data = await data.json();
    console.log("Search Product action in called")
    return {
        type: SEARCH_PRODUCT,
        data: query
    }
}