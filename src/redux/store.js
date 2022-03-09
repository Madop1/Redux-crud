import { createStore, applyMiddleware } from "redux";
import combineReducer from "./combineReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const store = createStore(combineReducer, applyMiddleware(thunk,logger));
// console.log("First Stage")
 export default store;