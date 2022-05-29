import {getTask} from "../../Redux/Reducer/Task/task.action";
import React from "react";
import {useState} from "react"
import { addTask, updateTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";

export default function Status (props){
  const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  window.onpaint = getTask();
  const keys = Object.keys(taskList[(taskList.length)-1]);
  const idvalue = taskList[(taskList.length)-1][keys[4]];
  const dispatch = useDispatch();
  // const [statusChangeData, setstatusChangeData] = useState({
  //   status:`${props.status}`,
  //   taskname:`${props.title}`, 
  //   taskdesc:`${props.description}` ,
  //   time:`${props.time}`,
  //   id: `${props.id}`,
  // });
 
  const various_tasks  = 
  {  
    status: `${props.status}`,
    taskname:`${props.title}`, 
    taskdesc: `${props.description}`, 
    time:`${props.time}`,
    id: `${props.id}`
};
  
  
  const handleChange = (event) => {
    //setstatusChangeData((prev) => ({...prev, [event.target.id]: event.target.value }));
    //event.preventDefault();
    various_tasks.status = document.getElementById("statusid").value
    submit();
  }
    function submit(e) {
      
    console.log("hello");
    // setstatusChangeData({
    //   status:`${document.getElementById("statusid").value}`,
    //   taskname:`${props.title}`, 
    //   taskdesc:`${props.description}` ,
    //   time:`${props.time}`,
    //   id: `${props.id}`,
    // });
    
    //console.log(statusChangeData.status);
    return dispatch(updateTask(various_tasks));
  };
  
    if (props.status === "Pending"){
        return (
        <div>
          <div id="statusid">
            <select  type="datalist" name="status" id={idvalue} onChange={handleChange}>
              <option value="Pending" selected>{props.status}</option>
              {/* <option value="Pending">Pending</option> */}
              <option value="Completed"  >Completed</option>
              <option value="On-Hold"  >On-Hold</option>
            </select>
          </div>
        </div>);
    }
    else if(props.status === "Completed"){
        return (
        <div >
          <div  id="statusid">
            <select type="datalist" name="status" id={idvalue} onChange={handleChange} >
              <option value="Completed" selected>{props.status}</option>
              <option value="Pending" >Pending</option>
              {/* <option value="Completed">Completed</option> */}
              <option value="On-Hold"   >On-Hold</option>
            </select>
          </div>
        </div>); 
    }
    else if(props.status === "On-Hold"){
        return (
        <div>
          <div  id="statusid"  >
            <select  type="datalist" name="status"  id={idvalue}  onChange={handleChange} > 
              <option value="On-Hold" selected>{props.status}</option>
              <option value="Pending"  >Pending</option>
              <option value="Completed"  >Completed</option>
              {/* <option value="On-Hold">On-Hold</option> */}
            </select>
          </div>
        </div>); 
    }
  //   if (props.status === "Pending"){
  //     return (<div  id="condition1"  >
    
  //     <select  type="datalist" name="status" id={idvalue} value={statusChangeData.status} onChange={handleChange}>
  //           <option value="Pending" selected>{props.status}</option>
  //           {/* <option value="Pending">Pending</option> */}
  //           <option value="Completed" >Completed</option>
  //           <option value="On-Hold" >On-Hold</option>
  //         </select>
  // </div>);
  // }
  // else if(props.status === "Completed"){
  //     return (<div  id="condition2"  >
  //         <select type="datalist" name="status" id={idvalue} value={statusChangeData.status} onChange={handleChange}>
  //           <option value="Completed" selected>{props.status}</option>
  //           <option value="Pending" >Pending</option>
  //           {/* <option value="Completed">Completed</option> */}
  //           <option value="On-Hold" >On-Hold</option>
  //         </select>
  //     </div>); 
  // }
  // else if(props.status === "On-Hold"){
  //     return (<div  id="condition3" >
  //         <select  type="datalist" name="status" id={idvalue} value={statusChangeData.status} onChange={handleChange}> 
  //           <option value="On-Hold" selected>{props.status}</option>
  //           <option value="Pending" >Pending</option>
  //           <option value="Completed" >Completed</option>
  //           {/* <option value="On-Hold">On-Hold</option> */}
  //         </select>
  //     </div>); 
  // }
}


