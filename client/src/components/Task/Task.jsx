import {getTask} from "../../Redux/Reducer/Task/task.action";
import React from "react";
import {Fragment, useState} from "react"
import Status from "./Status";
import { addTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";
import "./Task.css";

function Task(props) {
  
  // console.log("Hello");
  //const time = props.time.toLocaleString("en-US", { day: "2-digit" });
  //const time = props.time.toISOString().substring(0, 10);
  const time = props.time;
  

    if(localStorage.getItem("tasks"))
  {
    const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  const keys = Object.keys(taskList[(taskList.length)-1]);
 
  const idvalue = taskList[(taskList.length)-1][keys[4]];
  var tables = document.getElementsByTagName("table");
  for (var i = 0; i < tables.length; i++) {
    var table = tables[i];
    //var idvalue = taskList[i][keys[4]];
    table.setAttribute("id", idvalue);
    console.log("falseeeee");
  } 
}

  return (
    <>
    {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
      <table>
      {/* bg-gray-50 */}
            <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
            <tr>
                {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
                {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
                <td className="w-1/5">{props.title}</td>
                <td className="w-1/2">{props.description}</td>
                <td className="w-1/10">{time}</td>
                <td> 
                <Status
                id={props.key} 
                status={props.status} /></td>   
            </tr>
            </tbody>
      </table>

    </>
  );
}
export default Task;
