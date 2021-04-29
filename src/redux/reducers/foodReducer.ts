import { GET_FOOD } from '../constans';
import { foodActionType, IFood } from './../../interfaces';

interface IFoodState {
    food: [] | IFood[]
}

const initialState: IFoodState = {
    food: []
}

export const foodReducer = (state = initialState, action: foodActionType) => {
    switch (action.type) {
        case GET_FOOD: {
            return {
                food: action.payload
            }
        }

        default: return state
    }
}
