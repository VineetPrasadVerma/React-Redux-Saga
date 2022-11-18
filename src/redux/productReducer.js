import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
    switch (action.type) {
        case PRODUCT_LIST:
            console.log("Product list Reducer called");
            return []
        case SET_PRODUCT_LIST:
            console.log("Set Product list is called")
            console.log([...action.data])
            return [...action.data]
        default:
            console.log("No Product reducer Called")
            return data
    }
}