import {
  ADD_USERS,
  DELETE_USERS,
  FETCH_USERS,
  GET_USERS,
} from "./userTypes";
import axios from "axios";

export const FetchUsers = () => (dispatch) => {
  axios
    .get("https://6221efc4666291106a17da30.mockapi.io/users")
    .then((data) => {
       console.log("aaaaa", data);
      dispatch({ type: FETCH_USERS, payload: data });
    })
    .catch((error) => {
      console.log(error);
    });
  //};
};

export const DeleteUsers = (id) => (dispatch) => {
  console.log("iddddd", id);
  axios
    .delete(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`)
    .then((data) => {
      // console.log("ddddd", data  );
      dispatch({ type: DELETE_USERS, payload: id });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const AddUsers = (newData) => (dispatch) => {
  axios
    .post(`https://6221efc4666291106a17da30.mockapi.io/users`, newData)
    .then((data) => {
      console.log("ddddd", data);
      dispatch({ type: ADD_USERS, payload: data.data });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const editUsers = (users, id) => (dispatch) => {
  // console.log('iddddd', id)
  axios
    .put(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`, users)
    .then((data) => {
      // console.log("ddddd", data  );
      // dispatch({ type: EDIT_USERS, payload: data.data });
      dispatch(FetchUsers())
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getUsers = (id) => (dispatch) => {
  axios
    .get(`https://6221efc4666291106a17da30.mockapi.io/users/${id}`)
    .then((data) => {
      console.log("ddddd", data  );
      dispatch({ type: GET_USERS, payload: data.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
