import { combineReducers } from "redux";


import user from "./User/user.reducer";
import auth from "./Auth/auth.reducer";


const rootReducer = combineReducers({
  user,
  auth,
});

export default rootReducer;