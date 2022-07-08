import axios from "axios";
import { useParams } from "react-router-dom";

// Redux Types
import { GET_USER, SELF, CLEAR_USER } from "./user.type";
export var Username;

export const getUser = (id) => async (dispatch) => {
  // const id_value = localStorage.getItem("todoAppUserID");
  // const id = JSON.parse(id_value);
  // const token_value = localStorage.getItem("todoAppUser");
  // const token = JSON.parse(token_value);
  // console.log(id);
  // console.log(token);
  console.log(id);
  var idvalue = id.replace(/"/g, "");
  // var idvalue = JSON.stringify(id);
  console.log(idvalue);
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:4000/user/${idvalue}`,
    });
    console.log(User);
    Username = User.data.user;

    localStorage.setItem(
      "todoAppUserEmail",
      JSON.stringify(User.data.user.email)
    );
    localStorage.setItem("username", JSON.stringify(User.data.user.fullName));
    localStorage.setItem("verified", JSON.stringify(User.data.user.verified));

    return dispatch({ type: GET_USER, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const getMySelf = (token) => async (dispatch) => {
  try {
    const User = await axios({
      method: "GET",
      url: `http://localhost:4000/user/`,
      headers: { Authorization: `Bearer ${token}` },
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
