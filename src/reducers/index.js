import { combineReducers } from "redux";
import game from "./game";
import bird from "./bird";
import pipe from "./pipe";

const rootReducer=combineReducers({game,bird,pipe});
export default rootReducer;
