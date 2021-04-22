import { GET_FOOD } from '../constans';
import { actionType } from './../../interfaces';

interface IFoodState {
    food: [] | any[]
}

const initialState: IFoodState = {
    food: []
}

export const foodReducer = (state = initialState, action: actionType) => {
    switch (action.type) {
        case GET_FOOD: {
            return {
                food: action.payload
            }
        }

        default: return state
    }
}
