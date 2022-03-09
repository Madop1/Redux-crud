import { ADD_USERS, DELETE_USERS, FETCH_USERS, GET_USERS } from "./userTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  // console.log("SECOND STATGE")
  console.log("userReducer", action);
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.data,
      };
    case ADD_USERS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    // case EDIT_USERS:
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload],
    //   };
    case GET_USERS:
      return {
        users: action.payload,
      };
    case DELETE_USERS:
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
