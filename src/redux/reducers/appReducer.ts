import { loadingActionType } from "../../interfaces";
import { LOADING_FINISH, LOADING_START } from "../constans";

const appInitialState = {
    loading: false
}

const appReducer = (state = appInitialState, action: loadingActionType) => {
    switch (action.type) {
        case LOADING_START:
            return {loading: true}
        case LOADING_FINISH:
            return {loading: false}
        default:
            return state
    }
}

export default appReducer
