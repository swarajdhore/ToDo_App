// import {getTask} from "../../Redux/Reducer/Task/task.action";
import {useState} from "react"
import Status from "./Status";
import {getTask, deleteTask } from "../../Redux/Reducer/Task/task.action";
// import { addTask } from "../../Redux/Reducer/Task/task.action";
 import { useDispatch } from "react-redux";
import "./Task.css";

// export var deleteT = false;

function Task(props) {
  
  // console.log("Hello");
  //const time = props.time.toLocaleString("en-US", { day: "2-digit" });
  //const time = props.time.toISOString().substring(0, 10);
  var timeiso = props.time;
  const d = new Date(timeiso);
  var time  = d.toLocaleDateString().replace(/\//g, '-');
  console.log(time)
  const dispatch = useDispatch();

//   if(localStorage.getItem("tasks"))
//   {
//   const tasks = localStorage.getItem("tasks");    
//   const savedTasks = JSON.parse(tasks);
//   const taskList = savedTasks.tasks;
//   const keys = Object.keys(taskList[(taskList.length)-1]);
 
//   const idvalue = taskList[(taskList.length)-1][keys[4]];
//   var tables = document.getElementsByTagName("table");
//   for (var i = 0; i < tables.length; i++) {
//     var table = tables[i];
//     //var idvalue = taskList[i][keys[4]];
//     table.setAttribute("id", idvalue);
//     console.log("falseeeee");
//   } 
// }
// const [deleteT, setDeleteT] = useState(false);
// const deleteTHandler = () => {
//     setDeleteT((prevDelete) => !prevDelete);
// }

const deleteNow = () => {
  // const tasks = localStorage.getItem("tasks");    
  // const savedTasks = JSON.parse(tasks);
  // const taskLists = savedTasks.tasks;
  // console.log(taskLists);
  // window.onpaint = getTask();
  // const keys = Object.keys(taskLists[(taskLists.length)-1]);
  // const idvalue = taskLists[(taskLists.length)-1][keys[4]];
  // taskLists.forEach(function(taskList){
  //   //console.log(taskList[(taskList)-1][keys[4]])
  // });
  // console.log(props.id);
  // for(let i = 0; i < taskLists.length; i++){
  //   const keys = Object.keys(taskLists[i]);
  //   const idvalue = taskLists[i][keys[4]];
  // }
  
  console.log("Delete the task");
  console.log(props.id);
  dispatch(deleteTask(props.id));
}
  return (
    <>
    {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
      <table>
      {/* bg-gray-50 */}
            <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
            
            <tr >
                {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
                {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
                <td className="w-1/5">{props.title}</td>
                <td className="w-1/3">{props.description}</td>
                <td className="w-1/10">{time}</td>
                <td className="w-1/6"> 
                <Status
                id={props.id} 
                status={props.status} /></td>  
                <td className={`${props.deleteT === true ? "visible w-1/8 ": "invisible w-1/8"}`} onClick={deleteNow} >Delete <input type="checkbox" name="deleteTask" value={props.id}  /></td>
            </tr>
            </tbody>
      </table>

    </>
  );
}
export default Task;
