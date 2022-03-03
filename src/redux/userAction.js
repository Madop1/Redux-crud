import { DELETE_USERS, FETCH_USERS } from "./userTypes";
import axios from "axios";

export const FetchUsers = () => (dispatch) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((data) => {
      console.log("ddddd", data);
      dispatch({ type: FETCH_USERS, payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
  //};
};

export const DeleteUsers = (id) => (dispatch) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((data) => {
      dispatch({ type: DELETE_USERS ,payload : id});
    })
    .catch((error) => {
      console.log(error);
    });

};
