import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"//mac dinh la index.js

// const configureStore=() => {
//   const store = createStore(rootReducer, applyMiddleware(thunk));
//   return store;
// };
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
