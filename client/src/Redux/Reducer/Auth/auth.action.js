import axios from "axios";
import { Email } from "../../../components/Email/Email";
import { Notify2 } from "../../../components/Toast/Toast";
// Redux Types
import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// redux actions
import { getMySelf, clearUser } from "../User/user.action";
import { getTask } from "../Task/task.action";

export var notify;
export var isLoggedIn = 0;
export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/auth/login",
      data: { credentials: userData },
    });

    getMySelf();

    localStorage.setItem("todoAppUser", JSON.stringify(User.data.token));
    localStorage.setItem("todoAppUserID", JSON.stringify(User.data.id));
    localStorage.setItem("todoAppUserEmail", JSON.stringify(User.data.email));

    isLoggedIn = 1;
    getTask();
    window.location.href = "http://localhost:3000/";
    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    const redux_login_error = await dispatch({ type: "ERROR", payload: error });
  }
};

export const googleAuth = (token, id, email) => async (dispatch) => {
  try {
    var x = JSON.stringify(token);
    var y = JSON.stringify(id);
    var z = JSON.stringify(email);
    localStorage.setItem("todoAppUser", x);
    localStorage.setItem("todoAppUserID", y);
    localStorage.setItem("todoAppUserEmail", z);
    dispatch({ type: GOOGLE_AUTH, payload: {} });

    window.location.href = "http://localhost:3000/";
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
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
    getMySelf();
    localStorage.setItem("todoAppUser", JSON.stringify(User.data.token));
    localStorage.setItem("todoAppUserID", JSON.stringify(User.data.id));
    localStorage.setItem("newUser", "True");
    localStorage.setItem("todoAppUserEmail", JSON.stringify(User.data.email));
    localStorage.setItem("todoAppUserName", JSON.stringify(User.data.fullName));
    const saved = localStorage.getItem("todoAppUserID");
    const initialValue = JSON.stringify(saved);
    console.log(initialValue);
    isLoggedIn = 1;
    getTask();

    var users = localStorage.getItem("todoAppUserID");
    var newUser = localStorage.getItem("newUser");
    var emailsent = localStorage.getItem("EmailSent");
    if (emailsent == true) {
      notify = function () {
        return <Notify2 />;
      };
    }
    console.log(users);
    console.log(newUser);
    if (users && newUser) {
      var promise2 = new Promise(Email());
      var y = await promise2;
      if (y) {
        window.location.href = "http://localhost:3000/";
      }
    }
    // y.then(function () {

    //   console.log("promise fulfilled");
    // });

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("todoAppUser");
    localStorage.removeItem("todoAppUserID");
    localStorage.removeItem("tasks");
    localStorage.removeItem("username");
    localStorage.removeItem("todoAppUserEmail");
    localStorage.removeItem("todoAppUserName");
    localStorage.removeItem("EmailSent");
    if (localStorage.getItem("newUser")) localStorage.removeItem("newUser");
    clearUser();
    window.location.href = "http://localhost:3000/";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
