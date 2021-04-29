import { reviewsReducer } from './reducers/reviewsReducer';
import { foodReducer } from './reducers/foodReducer';
import { combineReducers } from "redux";
import appReducer from './reducers/appReducer';
import cartReducer from './reducers/cartReducer';



const rootReducer = combineReducers({
    foodPage: foodReducer,
    reviewsPage: reviewsReducer,
    appPage: appReducer,
    cartPage: cartReducer
})

export default rootReducer