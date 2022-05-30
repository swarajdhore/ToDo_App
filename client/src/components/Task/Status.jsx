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
  var changedStatus
  const [statusChangeData, setstatusChangeData] = useState({
    status:`${props.status}`,
    taskname:`${props.title}`, 
    taskdesc:`${props.description}` ,
    time:`${props.time}`,
    id: `${props.id}`,
  });
 
//   const various_tasks  = 
//   {  
//     status: `${changedStatus}`,
//     taskname:`${props.title}`, 
//     taskdesc: `${props.description}`, 
//     time:`${props.time}`,
//     id: `${props.id}`
// };

  
// console.log(statusChangeData.status);
  
//   //dispatch(updateTask(statusChangeData));
//   console.log(statusChangeData.status);
  // submit();
 const handleChange = (event) => {
    
    changedStatus = event.target.value;
    setstatusChangeData({
      status:`${event.target.value}`,
      taskname:`${props.title}`, 
      taskdesc:`${props.description}` ,
      time:`${props.time}`,
      id: `${props.id}`,
    
  })
 
}
console.log(statusChangeData.status)
   
function submit (event) { 
     console.log("From submit");
      console.log(statusChangeData.status);
    // const otherfunction = await handleChange(event);
    // console.log(statusChangeData.status) ;
    // console.log("hello");
    //console.log(statusChangeData.status);
    return  dispatch(updateTask(statusChangeData));
  };
  
  
    if (props.status === "Pending"){
        return (
          <>
        <div onChange= {handleChange}>
          <div id="statusid">
            <select  type="datalist" name="status" id={idvalue} >
              <option value="Pending" selected>{props.status}</option>
              {/* <option value="Pending">Pending</option> */}
              <option value="Completed"  >Completed</option>
              <option value="On-Hold"  >On-Hold</option>
            </select>
          </div>
        </div>
        <button onClick={submit}>Submit</button>
        </>
        );
    }
    else if(props.status === "Completed"){
        return (
          <>
        <div onChange={handleChange}>
          <div  id="statusid">
            <select type="datalist" name="status" id={idvalue} >
              <option value="Completed" selected>{props.status}</option>
              <option value="Pending" >Pending</option>
              {/* <option value="Completed">Completed</option> */}
              <option value="On-Hold"   >On-Hold</option>
            </select>
          </div>
        </div>
        <button onClick={submit}>Submit</button> 
        </>
        ); 
    }
    else if(props.status === "On-Hold"){
        return (
          <>
        <div onChange={handleChange}>
          <div  id="statusid"  >
            <select  type="datalist" name="status"  id={idvalue} >
              <option value="On-Hold" selected>{props.status}</option>
              <option value="Pending"  >Pending</option>
              <option value="Completed"  >Completed</option>
              {/* <option value="On-Hold">On-Hold</option> */}
            </select>
          </div>
        </div>
        <button onClick={submit}>Submit</button>
        </>
        ); 
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


