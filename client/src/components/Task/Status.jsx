import {getTask} from "../../Redux/Reducer/Task/task.action";
import React from "react";
import {Fragment, useState} from "react"
import { addTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";

export default function Status (props){
    const dispatch = useDispatch();
  const [statusChangeData, setstatusChangeData] = useState({
    status:`${props.status}`,
  });
  const handleChange = (e) => {
     setstatusChangeData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    
   };
  const submit = (e) => {
    //console.log("Hello World")
    
    setstatusChangeData({
      status:`${props.status}`,
    });
    if(statusChangeData.status==props.status)
        return
    dispatch(addTask(statusChangeData));
  };
  // async function submit() {

  // }

    if (props.status === "Pending"){
        return (<div value={statusChangeData.status} id="condition1" onClick={submit} >
      
        <select  type="datalist" name="status" id="status" onChange={handleChange}>
              <option value="Pending" selected>{props.status}</option>
              {/* <option value="Pending">Pending</option> */}
              <option value="Completed">Completed</option>
              <option value="On-Hold">On-Hold</option>
            </select>
    </div>);
    }
    else if(props.status === "Completed"){
        return (<div value={statusChangeData.status} id="condition2" onClick={submit}>
            <select type="datalist" name="status" id="status" onChange={handleChange}>
              <option value="Completed" selected>{props.status}</option>
              <option value="Pending">Pending</option>
              {/* <option value="Completed">Completed</option> */}
              <option value="On-Hold">On-Hold</option>
            </select>
        </div>); 
    }
    else if(props.status === "On-Hold"){
        return (<div value={statusChangeData.status} id="condition3" onClick={submit}>
            <select  type="datalist" name="status" id="status"  onChange={handleChange}> 
              <option value="On-Hold" selected>{props.status}</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              {/* <option value="On-Hold">On-Hold</option> */}
            </select>
        </div>); 
    }
}


