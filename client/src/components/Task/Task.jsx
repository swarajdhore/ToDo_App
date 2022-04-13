import {getTask} from "../../Redux/Reducer/Task/task.action";
import React from "react";
import {Fragment, useState} from "react"
import Status from "./Status";
import { addTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";

function Task(props) {
  
  // console.log("Hello");
  //const time = props.time.toLocaleString("en-US", { day: "2-digit" });
  //const time = props.time.toISOString().substring(0, 10);
  const time = props.time;
  

    if(localStorage.getItem("tasks"))
  {
    // window.location.reload();
  const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  const keys = Object.keys(taskList[(taskList.length)-1]);
  console.log(taskList[(taskList.length)-1][keys[4]]);
  //const idvalue = taskList[(taskList.length)-1][keys[4]];
  var tables = document.getElementsByTagName("table");
  for (var i = 0; i < tables.length; i++) {
    var table = tables[i];
    var idvalue = taskList[i][keys[4]];
    table.setAttribute("id", idvalue);
    console.log("falseeeee");
  } 
}

  return (
    <Fragment>
      <table className="min-w-full divide-y divide-gray-200 table-fixed border-separate">
            <tbody className="bg-gray-50">
            <tr className="px-1 py-3 text-mid text-lg font-medium text-gray-500 flex">
                <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.title}</td>
                <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.description}</td>
                <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{time}</td>
                <td className="border-solid border-black-200 h-10 flex-initial w-80 whitespace-nowrap"> 
                <Status 
                status={props.status} /></td>   
            </tr>
            </tbody>
      </table>

    </Fragment>
  );
}
export default Task;
