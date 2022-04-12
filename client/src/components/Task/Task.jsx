import {getTask} from "../../Redux/Reducer/Task/task.action";


function Task(props) {
 
  console.log("Hello");
  return (
    <li> 
    <h2>{props.title}</h2>
    <div>{props.description}</div>
    <div>{props.date}</div>
    </li> 
  );
}
export default Task;
