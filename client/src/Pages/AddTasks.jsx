import { useState } from "react";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Reducer/Task/task.action";

export default function AddTasks() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    taskname: "",
    taskdesc: "",
    status: "",
    time: "",
  });

  const handleChange = (event) =>{
    setTaskData ((prev) => ({...prev,[event.target.id]: event.target.value}));
  };

  const submit = () => {
    setTaskData({
      taskname: "",
      taskdesc: "",
      status: "",
      time: "",
    });
    dispatch(addTask({
      taskname: taskData.taskname,
      taskdesc: taskData.taskdesc,
      status: taskData.status,
      time: taskData.time,
    }));
  };


  return (
    <>
    <div className="h-screen flex ">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form>
          <div >
            <label htmlFor="taskname" className="font-medium">
              Task Name
            </label>
            <input
              type="text"
              name="taskname"
              id="taskname"
              onChange={handleChange}
              value={taskData.taskname}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ></input>
          </div>
          <div >
            <label htmlFor="taskdesc" className="font-medium">
              Description
            </label>
            <input
              type="text"
              name="taskdesc"
              id="taskdesc"
              onChange={handleChange}
              value={taskData.taskdesc}
              
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            ></input>
          </div>
          <div >
            <label htmlFor="time" className=" font-medium">
              Date
            </label>
              <input
              type="datetime-local"
              name="time"
              id="time"
              value={taskData.time}
              onChange={handleChange}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            /> 
             
          </div>
          <div >
          <label htmlFor="status">Status</label>
            <select name="cars" id="cars" value={taskData.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
              <option value="On-Hold">On-Hold</option>
            </select>
          </div>
          <div onClick={submit}>
            <div>Add Task</div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}


