import axios from "axios";
import { Email } from "../../../components/Email/Email";
import { Notify2, Notify3 } from "../../../components/Toast/Toast";
import { notify3, notify5 } from "../../../Pages/RegisterPage";
import { notify4 } from "../../../Pages/LoginPage";
// Redux Types
import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from "./auth.type";

// redux actions
import { getMySelf, clearUser, getUser } from "../User/user.action";
import { getTask } from "../Task/task.action";

export var notify;
export var redux_login_error;
export var redux_register_error;
export var redux_register_success;
export var isLoggedIn = 0;
export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: "http://localhost:4000/auth/login",
      data: { credentials: userData },
    });

    getMySelf(User.data.token);
    console.log(User);
    localStorage.setItem("todoAppUser", JSON.stringify(User.data.token));
    localStorage.setItem("todoAppUserID", JSON.stringify(User.data.id));
    localStorage.setItem("todoAppUserEmail", JSON.stringify(User.data.email));
    localStorage.setItem("fullName", JSON.stringify(User.data.fullName));
    // localStorage.setItem("verified", JSON.stringify(User.data.verified));
    isLoggedIn = 1;
    console.log(User.data.id);
    const x = await dispatch(getUser(User.data.id));
    console.log(x);
    getTask();
    window.location.href = "http://localhost:3000/";
    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    const redux_login_error1 = await dispatch({
      type: "ERROR",
      payload: error,
    });
    redux_login_error = redux_login_error1.payload.response.data.error;
    // console.log(redux_login_error.payload.response.data.error)
    console.log(redux_login_error);
    notify4();
  }
};

export const googleAuth = (token, id) => async (dispatch) => {
  try {
    var x = JSON.stringify(token);
    var y = JSON.stringify(id);
    getMySelf(x);
    localStorage.setItem("todoAppUser", x);
    localStorage.setItem("todoAppUserID", y);
    localStorage.setItem("verified", true);
    const userid = await dispatch(getUser(y));
    console.log(userid);

    dispatch({ type: GOOGLE_AUTH, payload: {} });

    // window.location.href = "http://localhost:3000/";
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

    var emailsent = localStorage.getItem("EmailSent");
    if (emailsent == true) {
      notify = function () {
        return <Notify2 />;
      };
    }
    console.log(users);

    if (users) {
      var promise2 = new Promise(Email());
      var y = await promise2;
    }

    // y.then(function () {

    //   console.log("promise fulfilled");
    // });

    dispatch({
      type: SIGN_UP,
      payload: User.data,
    });

    redux_register_success =
      "User registered successfully. Please check for your email for verification.";
  } catch (error) {
    const redux_login_error1 = await dispatch({
      type: "ERROR",
      payload: error,
    });
    if (error)
      redux_register_error = redux_login_error1.payload.response.data.error;
    // console.log(redux_login_error.payload.response.data.error)
    console.log(redux_register_error);
    notify3();
  } finally {
    if (users) {
      notify = function () {
        return <Notify2 />;
      };
    }
  }
};

export const logOut = () => async (dispatch) => {
  try {
    localStorage.removeItem("todoAppUser");
    localStorage.removeItem("todoAppUserID");
    localStorage.removeItem("tasks");

    localStorage.removeItem("todoAppUserEmail");
    localStorage.removeItem("todoAppUserName");
    localStorage.removeItem("EmailSent");
    localStorage.removeItem("verified");
    localStorage.removeItem("newUser");
    if (localStorage.getItem("newUser")) localStorage.removeItem("newUser");
    clearUser();
    window.location.href = "http://localhost:3000/";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};
