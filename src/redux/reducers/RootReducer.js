import {combineReducers} from "redux";
import {TimeReducer} from "./TimeReducer";

const rootReducer = combineReducers({
    timer: TimeReducer
})

export default rootReducer;