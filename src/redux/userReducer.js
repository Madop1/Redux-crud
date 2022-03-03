import { DELETE_USERS, FETCH_USERS } from "./userTypes";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  console.log("userReducer", action);
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.data,
        loading: false,
      };
    case DELETE_USERS:
      return {
        users: [...state.users.filter((id) => id !== action.payload)],
        loading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
