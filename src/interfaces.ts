import { GET_FOOD, GET_REVIEWS, LOADING_FINISH, LOADING_START } from "./redux/constans";

interface ILoadingStart {
    type: typeof LOADING_START
}
interface ILoadingFinish {
    type: typeof LOADING_FINISH
}

export type loadingActionType = ILoadingStart | ILoadingFinish

// ---

interface IGetFood {
    type: typeof GET_FOOD
    payload: [] | any[]
}

export type actionType = IGetFood

// ---

interface IGetReviews {
    type: typeof GET_REVIEWS
    payload: [] | any[]
}

export type reviewsActionType = IGetReviews

// --------------

export interface IFood {
    id: number
    type: "gamburger" | "sandwich" | "cookie" | "cake"
    name: string
    img: string
    title: string
    size: [] | string[]
    cutlet: [] | string[]
    sous: [] | string[]
    greens: [] | string[]
    price: number
    isStock: boolean
    discount: number
    reviews: [] | string[]
    description: string
    countOfSold: number
}

export interface IReview {
    id: number
    user: string
    photo: string
    text: string
}

export interface IFoodStateConnect {
    foodPage: {
        food: IFood[]
    }
}
export interface IReviewStateConnect {
    reviewsPage: {
        reviews: IReview[]
    }
}
export interface IStateConnect {
    reviewsPage: {
        reviews: IReview[]
    }
    foodPage: {
        food: IFood[]
    }
}