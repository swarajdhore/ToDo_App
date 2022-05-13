import { combineReducers } from "redux";


import user from "./User/user.reducer";
import auth from "./Auth/auth.reducer";
import task from "./Task/task.reducer"

const rootReducer = combineReducers({
  user,
  auth,
  task,
});

export default rootReducer;