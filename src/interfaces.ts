import { ADD_CART_ITEM, CHANGE_CART_ITEM, DELETE_CART_ITEM, GET_CART, GET_FOOD, GET_REVIEWS, LOADING_FINISH, LOADING_START } from "./redux/constans";

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
    payload: [] | IFood[]
}

export type foodActionType = IGetFood

// ---

interface IGetCart {
    type: typeof GET_CART
    payload: [] | ICart[]
}
interface IAddCart {
    type: typeof ADD_CART_ITEM
    payload: ICart
}
interface IChangeCart {
    type: typeof CHANGE_CART_ITEM
    payload: ICart
}
interface IDeleteCart {
    type: typeof DELETE_CART_ITEM
    payload: ICart
}

export type cartActionType = IGetCart | IAddCart | IChangeCart | IDeleteCart

// ---

interface IGetReviews {
    type: typeof GET_REVIEWS
    payload: [] | IReview[]
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

export interface ICart {
    id: number,
    count: number,
    sum: number,
    foodItem: IFood
}

// --------------

export interface IFoodStateConnect {
    foodPage: {
        food: IFood[]
    }
}
export interface ICartStateConnect {
    cartPage: {
        cart: ICart[]
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

