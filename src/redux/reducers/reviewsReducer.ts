import { GET_REVIEWS } from '../constans';
import { reviewsActionType } from './../../interfaces';

interface IReviewsState {
    reviews: [] | any[]
}

const initialState: IReviewsState = {
    reviews: []
}

export const reviewsReducer = (state = initialState, action: reviewsActionType) => {
    switch (action.type) {
        case GET_REVIEWS: {
            return {
                reviews: action.payload
            }
        }

        default: return state
    }
}
