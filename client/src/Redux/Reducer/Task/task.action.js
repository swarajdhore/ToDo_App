import axios from "axios";
import Task from "../../../components/Task/Task";
import Status from "../../../components/Task/Status";
// import {useEffect} from "react";

// Redux Types
import { GET_TASK,ADD_TASK,DELETE_TASK,UPDATE_TASK } from "./task.type";



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
    // localStorage.setItem(Task.data.tasks);
    // useEffect(() => {
    // // storing input name
    // localStorage.setItem(
    //     "tasks",
    //     JSON.stringify( Tasklist )
    //   )
    // }, [Tasklist]);
    localStorage.setItem(
        "tasks",
        JSON.stringify( Task.data.tasks )
      );
      window.location.reload();
      window.location.href = "http://localhost:3000/todolist";
    // console.log(Task.data.tasks.tasks);
    return dispatch({ type: GET_TASK, payload: Task.data });
  } catch (error) {
    console.log(error);
    return dispatch({ type: "ERROR", payload: error });
  }
  finally{
    const promise2 =  new Promise(Task());
    const y = await promise2;
  }
};

export const addTask = (taskData) => async (dispatch) => {
    const id_value = localStorage.getItem("todoAppUserID");
    const id = JSON.parse(id_value);
    const token_value = localStorage.getItem("todoAppUser");
    const token = JSON.parse(token_value);
    console.log(id)
    console.log(token)
    console.log(taskData)
    
    if(localStorage.getItem("tasks"))
    {
      // window.location.reload();
    const tasks = localStorage.getItem("tasks");    
    const savedTasks = JSON.parse(tasks);
    const taskList = savedTasks.tasks;
    console.log(taskList);
    }
  try {
      console.log("hello there")
    const Task = await axios({
      method: "POST",
      url: `http://localhost:4000/task/new/${id}`,
      headers: { Authorization: `Bearer ${token}` },
      data: { tasks: taskData },
    });
    
    return dispatch({ type: ADD_TASK, payload: Task.data });
  } catch (error) {
      console.log(error)
    return dispatch({ type: "ERROR", payload: error });
  }
  finally{
    
    const myPromise = new Promise(getTask());
    const x = await myPromise;
   
    window.location.href = "http://localhost:3000/todolist";
    
  }
};


export const updateTask = (taskData) => async (dispatch) => {
  const id_value = localStorage.getItem("todoAppUserID");
  const id = JSON.parse(id_value);
  const token_value = localStorage.getItem("todoAppUser");
  const token = JSON.parse(token_value);
  console.log(id)
  console.log(token)
  console.log(taskData)
  
  if(localStorage.getItem("tasks"))
  {
    // window.location.reload();
  const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  console.log(taskList);
  }
try {
    console.log("hello there")
  const Task = await axios({
    method: "POST",
    url: `http://localhost:4000/task/update/${id}`,
    headers: { Authorization: `Bearer ${token}` },
    data: { tasks: taskData },
  });
  
  return dispatch({ type: UPDATE_TASK, payload: Task.data });
} catch (error) {
    console.log(error)
  return dispatch({ type: "ERROR", payload: error });
}
finally{
  
  const myPromise = new Promise(getTask());
  const x = await myPromise;
 
  window.location.href = "http://localhost:3000/todolist";
  
}
};

export const deleteTask = (taskid) => async (dispatch) => {
  const id_value = localStorage.getItem("todoAppUserID");
  const id = JSON.parse(id_value);
  console.log("Success  1");
  const token_value = localStorage.getItem("todoAppUser");
  console.log("Success  2");
  const token = JSON.parse(token_value);
  console.log("Success  3");
  console.log(id)
  console.log(token);
  console.log("Success  4");
  //console.log(taskData)
  
  // if(localStorage.getItem("tasks"))
  // {
  //   // window.location.reload();
  // const tasks = localStorage.getItem("tasks");    
  // const savedTasks = JSON.parse(tasks);
  // const taskList = savedTasks.tasks;
  // console.log(taskList);
  // }
try {
  console.log("Success  5");
    console.log("hello there")
  const Task = await axios({
    method: "DELETE",
    url: `http://localhost:4000/task/delete/${taskid}`,
    headers: { Authorization: `Bearer ${token}` },
    data:{tasks:id},
  });
  console.log("Success  6");
  
  return dispatch({ type: DELETE_TASK,  payload: Task.data });
} catch (error) {
    console.log(error)
  return dispatch({ type: "ERROR", payload: error  });
}
finally{
  
  const myPromise = new Promise(getTask());
  const x = await myPromise;
  window.location.href = "http://localhost:3000/todolist";
}
};

