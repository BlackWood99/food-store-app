import axios from "axios"
import { Dispatch } from "react"
import { ICart } from "../interfaces"
import { GET_CART, ADD_CART_ITEM, DELETE_CART_ITEM, GET_FOOD, GET_REVIEWS, LOADING_FINISH, LOADING_START, CHANGE_CART_ITEM } from "./constans"


export const loadingStartAC = () => {
    return {
        type: LOADING_START
    }
}

export const loadingFinishAC = () => {
    return {
        type: LOADING_FINISH
    }
}

//// FOOD
interface IDispatch {
    Dispatch: {

    }
}


export const getFood = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(loadingStartAC())
        const response = await axios.get('/food')
        if (response.status === 200) dispatch({
            type: GET_FOOD,
            payload: response.data
        })
        dispatch(loadingFinishAC())
    } catch (error) {
        console.log('Произошла ошибка при запросе еды: ' + error)
    }
}

//// CART

export const getCart = () => async (dispatch: any) => {
    try {
        const response = await axios.get('/cart')
        if (response.status === 200) dispatch({
            type: GET_CART,
            payload: response.data
        })
    } catch (error) {
        console.log('Произошла ошибка при запросе корзины: ' + error)
    }
}

export const addCartItem = (cartItem: ICart) => (dispatch: any) => {
    try {
        axios.post('/cart', cartItem)
            .then(response => {
                dispatch({
                    type: ADD_CART_ITEM,
                    payload: response.data
                })
            })
    } catch (error) {
        console.log('Произошла ошибка при запросе корзины: ' + error)
    }
}

/* export const changeCount = (cartItem: any) => (dispatch: any) => {
    try {
        axios.put(`http://localhost:3004/cart/${cartItem.id}`, cartItem)
            .then(response => {
                dispatch({
                    type: CHANGE_CART_ITEM,
                    payload: response.data
                })
            })
    } catch (error) {
        console.log('Произошла ошибка при запросе корзины: ' + error)
    }
} */

export const changeCount = (cartItem: ICart) => {
    return {
        type: CHANGE_CART_ITEM,
        payload: cartItem
    }
}

export const deleteCartItem = (cartItem: ICart) => async (dispatch: any) => {
    try {
        axios.delete(`/cart/${cartItem.id}`)
            .then(() => {
                dispatch({
                    type: DELETE_CART_ITEM,
                    payload: cartItem
                })
            })
    } catch (error) {
        console.log('Произошла ошибка при запросе корзины: ' + error)
    }
}

//// REVIEWS

export const getReviews = () => async (dispatch: any) => {
    try {
        dispatch(loadingStartAC())
        const response = await axios.get('/reviews')
        if (response.status === 200) dispatch({
            type: GET_REVIEWS,
            payload: response.data
        })
        dispatch(loadingFinishAC())
    } catch (error) {
        console.log('Произошла ошибка при запросе отзывов: ' + error)
    }
}