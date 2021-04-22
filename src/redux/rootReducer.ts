import { reviewsReducer } from './reducers/reviewsReducer';
import { foodReducer } from './reducers/foodReducer';
import { combineReducers } from "redux";
import appReducer from './reducers/appReducer';



const rootReducer = combineReducers({
    foodPage: foodReducer,
    reviewsPage: reviewsReducer,
    appPage: appReducer
})

export default rootReducer