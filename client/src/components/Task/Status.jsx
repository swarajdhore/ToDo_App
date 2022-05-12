// import {getTask} from "../../Redux/Reducer/Task/task.action";
// import React from "react";
// import {useState} from "react"
// import { addTask } from "../../Redux/Reducer/Task/task.action";
// import { useDispatch } from "react-redux";

// export default function Status (props){
//   const dispatch = useDispatch();
//   const [statusChangeData, setstatusChangeData] = useState({
//     status:`${props.status}`,
//     time:`${props.time}`
//   });
//   const handleChange = (e) => {
//      setstatusChangeData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    
//    };
//   const submit = (event) => {
//     //console.log("Hello World")
//     event.preventDefault();
//     setstatusChangeData({
//       status:`${props.status}`,
//       time: `${props.time}`,
//     });
//     if(statusChangeData.status == props.status && statusChangeData.status == props.time)
//         return
//     dispatch(addTask(statusChangeData));
//   };
//   // async function submit() {

//   // }

//     if (props.status === "Pending"){
//         return (<div value={statusChangeData.status} id="condition1" onClick={submit} >
      
//         <select  type="datalist" name="status" id="status" onChange={handleChange}>
//               <option value="Pending" selected>{props.status}</option>
//               {/* <option value="Pending">Pending</option> */}
//               <option value="Completed">Completed</option>
//               <option value="On-Hold">On-Hold</option>
//             </select>
//     </div>);
//     }
//     else if(props.status === "Completed"){
//         return (<div value={statusChangeData.status} id="condition2" onClick={submit}>
//             <select type="datalist" name="status" id="status" onChange={handleChange}>
//               <option value="Completed" selected>{props.status}</option>
//               <option value="Pending">Pending</option>
//               {/* <option value="Completed">Completed</option> */}
//               <option value="On-Hold">On-Hold</option>
//             </select>
//         </div>); 
//     }
//     else if(props.status === "On-Hold"){
//         return (<div value={statusChangeData.status} id="condition3" onClick={submit}>
//             <select  type="datalist" name="status" id="status"  onChange={handleChange}> 
//               <option value="On-Hold" selected>{props.status}</option>
//               <option value="Pending">Pending</option>
//               <option value="Completed">Completed</option>
//               {/* <option value="On-Hold">On-Hold</option> */}
//             </select>
//         </div>); 
//     }
// }


import {getTask} from "../../Redux/Reducer/Task/task.action";
import React from "react";
import {useState} from "react"
import { addTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";

export default function Status (props){
    const dispatch = useDispatch();
  const [statusChangeData, setstatusChangeData] = useState({
    status:`${props.status}`,
    time:`${props.time}`,
  });
    const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  console.log(taskList);
  window.onpaint = getTask();
  const keys = Object.keys(taskList[(taskList.length)-1]);
  const idvalue = taskList[(taskList.length)-1][keys[4]];
  const handleChange = (event) => {
     setstatusChangeData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
    
   };
   
  const submit = () => {
    //console.log("Hello World")
  
    console.log("hello");
    
    setstatusChangeData({
      status:`${props.status}`,
      time:`${props.time}`,
    });
    if(statusChangeData.status==props.status)
        return
    dispatch(addTask(statusChangeData));
  };
  
  const todo = () => {
   handleChange();
    alert(this.id);
  }

  // async function submit() {

  // }
    var x;
    if (props.status === "Pending"){
        return (<div  >
        <div value={statusChangeData.status}  onClick={submit}>
        <select  type="datalist" name="status"  id={idvalue}  onChange={handleChange}  >
              <option value="Pending" selected>{props.status}</option>
              {/* <option value="Pending">Pending</option> */}
              <option value="Completed">{props.id}</option>
              <option value="Completed">Completed</option>
              <option value="On-Hold">On-Hold</option>
            </select>
    </div>
    </div>);
    }
    else if(props.status === "Completed"){
        return (<div >
        <div value={statusChangeData.status}  onClick={submit}  >
            <select type="datalist" name="status" id={idvalue}  onChange={handleChange}>
              <option value="Completed" >{props.id}</option>
              <option value="Completed" selected>{props.status}</option>
              <option value="Pending">Pending</option>
              {/* <option value="Completed">Completed</option> */}
              <option value="On-Hold">On-Hold</option>
            </select>
        </div>
        </div>); 
    }
    else if(props.status === "On-Hold"){
        return (<div  >
        <div value={statusChangeData.status}  onClick={submit} >
            <select  type="datalist" name="status"  id={idvalue}  onChange={handleChange} > 
              <option value="On-Hold" selected>{props.status}</option>
              <option value="Completed" >{props.id}</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              {/* <option value="On-Hold">On-Hold</option> */}
            </select>
        </div>
        </div>); 
    }
}


