import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant"

export function addToCart(data) {
    console.log("Add Action", data)
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export function removeFromCart(data) {
    console.log("Remove Action", data)
    return {
        type: REMOVE_FROM_CART,
        data: data
    }
}

export function emptyCart() {
    console.log("Empty cart Action")
    return {
        type: EMPTY_CART
    }
}