
import { PRODUCT_LIST } from "./constant"

export function getProductList() {
    // let data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // data = await data.json();
    console.log("Get Product list action in called")
    return {
        type: PRODUCT_LIST
    }
}