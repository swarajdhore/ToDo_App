import axios from "axios";

// Redux Types
import { GET_TASK,ADD_TASK } from "./task.type";

export var Tasklist;
export const getTask = () => async (dispatch) => {
    const id_value = localStorage.getItem("todoAppUserID");
    const id = JSON.parse(id_value);
    const token_value = localStorage.getItem("todoAppUser");
    const token = JSON.parse(token_value);
    console.log(id)
    console.log(token)
  try {
    const Task = await axios({
      method: "GET",
      url: `http://localhost:4000/task/${id}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    Tasklist = Task.data.tasks;
    //localStorage.setItem(Task.data.tasks);
    localStorage.setItem(
        "tasks",
        JSON.stringify( Task.data.tasks )
      );

    console.log(Task.data.tasks.tasks);
    return dispatch({ type: GET_TASK, payload: Task.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const addTask = (taskData) => async (dispatch) => {
    const id_value = localStorage.getItem("todoAppUserID");
    const id = JSON.parse(id_value);
    const token_value = localStorage.getItem("todoAppUser");
    const token = JSON.parse(token_value);
    console.log(id)
    console.log(token)
  try {
      console.log("hello there")
    const Task = await axios({
      method: "POST",
      url: `http://localhost:4000/task/new/${id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { tasks: taskData },
    });
    window.location.href = "http://localhost:3000/todolist";
    return dispatch({ type: ADD_TASK, payload: Task.data });
  } catch (error) {
      console.log(error)
    return dispatch({ type: "ERROR", payload: error });
  }
};

