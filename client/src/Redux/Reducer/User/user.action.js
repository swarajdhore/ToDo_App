import axios from "axios";

// Redux Types
import { GET_USER, SELF, CLEAR_USER } from "./user.type";
export var Username;
export const getUser = () => async (dispatch) => {
  const id_value = localStorage.getItem("todoAppUserID");
  const id = JSON.parse(id_value);
  const token_value = localStorage.getItem("todoAppUser");
  const token = JSON.parse(token_value);
  console.log(id);
  console.log(token);
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:4000/user/${id}`,
    });
    Username = User.data.user;
    localStorage.setItem("username", JSON.stringify(Username));
    return dispatch({ type: GET_USER, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getMySelf = () => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:4000/user/`,
    });

    return dispatch({ type: SELF, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const clearUser = () => (dispatch) => {
  try {
    return dispatch({ type: CLEAR_USER, payload: {} });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
