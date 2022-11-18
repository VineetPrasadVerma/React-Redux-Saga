import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Add to cart Reducer called", action.data);
            return [...data, action.data]
        case REMOVE_FROM_CART:
            console.warn("REMOVE_FROM_CART called ", action);
            // data.length = data.length ? data.length - 1 : []
            const remainingItems = data.filter((item) => item.id !== action.data)
            return [...remainingItems]
        case EMPTY_CART:
            console.warn("EMPTY CART called ", action);
            data = []
            return [...data]
        default:
            console.log("No cart reducer Called")
            return data
    }
}