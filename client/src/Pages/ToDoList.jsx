import { Link } from "react-router-dom";
import Task from "../components/Task/Task"

function ToDoList(props) {
  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1>ToDoList</h1>
        <button>
          <Link to="/addtask">Add Task</Link>
        </button>
          <Task name="assignment"
            status="incomplete"
          />
           <Task name="assignment"
            status="incomplete"
          />
      </div>
    </div>
  );
}

export default ToDoList;
