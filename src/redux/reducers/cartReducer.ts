import { cartActionType } from "../../interfaces";
import { GET_CART, ADD_CART_ITEM, DELETE_CART_ITEM, CHANGE_CART_ITEM } from "../constans";

const cartInitialState = {
    cart: [
        {
            id: 10003,
            count: 3,
            sum: 1740,
            foodItem: {}
        }
    ]
}

const cartReducer = (state = cartInitialState, action: cartActionType) => {
    switch (action.type) {
        case GET_CART:
            return {
                cart: action.payload
            }
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload]
            }
        case CHANGE_CART_ITEM:
            return {
                cart: state.cart.map(cartItem => {
                    if (action.payload.id === cartItem.id) {
                        return action.payload
                    } else return cartItem                    
                })
            }
        case DELETE_CART_ITEM:
            return {
                cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default cartReducer
