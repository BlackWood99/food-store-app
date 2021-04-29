import axios from "axios"
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

export const getFood = () => async (dispatch: any) => {
    try {
        dispatch(loadingStartAC())
        const response = await axios.get('http://localhost:3004/food')
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
        const response = await axios.get('http://localhost:3004/cart')
        if (response.status === 200) dispatch({
            type: GET_CART,
            payload: response.data
        })
    } catch (error) {
        console.log('Произошла ошибка при запросе корзины: ' + error)
    }
}

export const addCartItem = (cartItem: any) => (dispatch: any) => {
    try {
        axios.post('http://localhost:3004/cart', cartItem)
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

export const changeCount = (cartItem: any) => (dispatch: any) => {
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
}

export const deleteCartItem = (cartItem: any) => async (dispatch: any) => {
    try {
        axios.delete(`http://localhost:3004/cart/${cartItem.id}`)
            .then(response => {
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
        const response = await axios.get('http://localhost:3004/reviews')
        if (response.status === 200) dispatch({
            type: GET_REVIEWS,
            payload: response.data
        })
        dispatch(loadingFinishAC())
    } catch (error) {
        console.log('Произошла ошибка при запросе отзывов: ' + error)
    }
}