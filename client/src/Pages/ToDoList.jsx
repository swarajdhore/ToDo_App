import { Link } from "react-router-dom";
// import Task from "../components/Task/Task"
//import {useState} from 'react';
// import { getTask, Tasklist } from "../Redux/Reducer/Task/task.action";
// import Pagination from "@material-ui/lab/Pagination";
// import usePagination from "../components/Pagination/pagination";
import "../components/Task/Task.css";
import {PaginationCompenent} from "../components/Pagination/PaginationCompenent";
import {_DATA} from "../components/Pagination/PaginationCompenent";

export default function ToDoList() {
  if(localStorage.getItem("tasks"))
  {
    var x = localStorage.getItem("tasks")
    const y = JSON.parse(x);
    console.log(y.tasks.length)
    if(y.tasks.length)
    {
      return(
      <PaginationCompenent/>
      )
    }
    else {
      return (
    <div className="  ">
    
      <div className="h-screen flex ">
      <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
        <div className="text-center">
        <button className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-4 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="my-6 font-semibold text-4xl"> No Task Found </h1>
        </div>
      </div>
     </div>
    </div>
    );
  }
  }
  else {
  return (
    <div className="  ">
   
      <div className="h-screen flex ">
      <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
        <div className="text-center">
        <button className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-4 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="my-6 font-semibold text-4xl"> No Task Found </h1>
        </div>
      </div>
     </div>
    </div>
  );}
  
 
  }
