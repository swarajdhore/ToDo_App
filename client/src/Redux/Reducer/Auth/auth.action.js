import axios from "axios";

// Redux Types
import { SIGN_IN, SIGN_OUT, SIGN_UP} from "./auth.type";

// redux actions
import { getMySelf, clearUser } from "../User/user.action";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/auth/login",
      data: { credentials: userData },
    });
    
    getMySelf();

    localStorage.setItem(
      "todoAppUser",
      JSON.stringify({ token: User.data.token })
    );
    window.location.href = "http://localhost:3000/todolist";
    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "ERROR", payload: error });
  }
};

export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `http://localhost:4000/auth/signup`,
      data: { credentials: userData },
    });
    console.log(User);
    window.location.href = `http://localhost:3000/todolist/`;
    localStorage.setItem(
      "todoAppUser",
      JSON.stringify({ token: User.data.token })
    );

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};


// export const signOut = () => async (dispatch) => {
//   try {
//     localStorage.removeItem("todoAppUser");
//     clearUser();
//     window.location.href = "http://localhost:3000/home";

//     return dispatch({ type: SIGN_OUT, payload: {} });
//   } catch (error) {
//     dispatch({ type: "ERROR", payload: error });
//   }
// };