import { Tasklist } from "./task.action";
import {
  GET_TASK,
  ADD_TASK,
  DELETE_TASK,
  DELETE_TASKS,
  UPDATE_TASK,
} from "./task.type";
const initialState = {};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK:
      return {
        ...state,
      };
    case ADD_TASK:
      return {
        ...state,
      };
    case UPDATE_TASK:
      return {
        ...state,
      };
    case DELETE_TASK:
      return {
        ...state,
      };
    case DELETE_TASKS:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default taskReducer;
