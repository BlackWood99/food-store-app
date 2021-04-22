import axios from "axios"
import { GET_FOOD, GET_REVIEWS, LOADING_FINISH, LOADING_START } from "./constans"


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