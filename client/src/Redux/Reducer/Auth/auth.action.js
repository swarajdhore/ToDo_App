import axios from "axios";

// Redux Types
import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH} from "./auth.type";

// redux actions
import { getMySelf, clearUser } from "../User/user.action";
import { getTask } from "../Task/task.action";

export var isLoggedIn = 0;
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
      JSON.stringify( User.data.token )
    );
    localStorage.setItem(
      "todoAppUserID",
      JSON.stringify( User.data.id )
    );
    
    isLoggedIn = 1; 
    getTask();  
    window.location.href = "http://localhost:3000/";
    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    
    const redux_login_error = await dispatch({ type: "ERROR", payload: error });
  }
};

export const googleAuth = (token,id) => async (dispatch) => {
  try {
    // const User = await axios({
    //   method: "GET",
    //   url: "http://localhost:4000/auth/google/callback",
      
    // });
    
    // getMySelf();
    
    // localStorage.setItem(
    //   "todoAppUser",
    //   JSON.stringify(User.data.token )
    // );
    // localStorage.setItem(
    //   "todoAppUserID",
    //   JSON.stringify(User.data.id )
    // );
    // isLoggedIn = 1; 
    // getTask();  
    // window.location.href = "http://localhost:3000/";

    // dispatch({ type: GOOGLE_AUTH, payload: {} });
    //var tokenvalue = token.token
    //var idvalue = id.id
    var x = JSON.stringify(token);
    var y = JSON.stringify(id)
    localStorage.setItem("todoAppUser", x );
    localStorage.setItem("todoAppUserID",y);
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
    window.location.href = `http://localhost:3000/todolist/`;
    localStorage.setItem(
      "todoAppUser",
      JSON.stringify(User.data.token )
    );
    localStorage.setItem(
      "todoAppUserID",
      JSON.stringify(User.data.id )
    );
    
    const saved = localStorage.getItem("todoAppUserID");
    const initialValue = JSON.stringify(saved);
    console.log(initialValue);

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
    clearUser();
    window.location.href = "http://localhost:3000/";

    return dispatch({ type: SIGN_OUT, payload: {} });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};