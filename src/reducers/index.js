import { combineReducers } from "redux";
import game from "./game";
import bird from "./bird";

const rootReducer=combineReducers({game,bird});
export default rootReducer;
