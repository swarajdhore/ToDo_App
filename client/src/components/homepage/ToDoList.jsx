import { Link } from "react-router-dom";

function ToDoList(props) {
  return (
    <div className="main-container">
      <h1>ToDoList</h1>
      <Link to="/addtask">Add Task</Link>
      <ul>
        <div>
          <h4>Tasks</h4>
          <h4>Status</h4>
        </div>
        <li>Items</li>
      </ul>
    </div>
  );
}

export default ToDoList;
