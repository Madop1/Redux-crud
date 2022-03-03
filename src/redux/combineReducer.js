import { combineReducers } from "redux";
import userReducer from "./userReducer";

const combineReducer = combineReducers({
  data: userReducer,
});

export default combineReducer;
