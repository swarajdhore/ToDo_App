import { getTask } from "../Redux/Reducer/Task/task.action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "../components/Dashboard/Nav";
import { addTask } from "../Redux/Reducer/Task/task.action";
import Background_Image from "../components/Background_Image/Background_Image";
export default function AddTasks() {
  const dispatch = useDispatch();
  const [taskData, setTaskData] = useState({
    taskname: "",
    taskdesc: "",
    status: "",
    time: "",
  });

  const handleChange = (event) => {
    setTaskData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const submit = () => {
    setTaskData({
      taskname: "",
      taskdesc: "",
      status: "",
      time: "",
    });
    dispatch(
      addTask({
        taskname: taskData.taskname,
        taskdesc: taskData.taskdesc,
        status: taskData.status,
        time: taskData.time,
      })
    );
  };

  return (
    <>
      {/* < className="flex bg-gray-100">
        {/* konta changla design miyala ka?? 
        <div>
          <Nav />
        </div> */}
      <div className="  w-full flex ">
        <div className="rounded-lg max-w-md m-auto bg-indigo-200 shadow-2xl shadow-black-400/50 py-10 px-8">
          <form>
            <div>
              <label htmlFor="taskname" className="font-semibold">
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
            <div>
              <label htmlFor="taskdesc" className="font-semibold">
                Description
              </label>
              <textarea
                type="text"
                name="taskdesc"
                id="taskdesc"
                onChange={handleChange}
                value={taskData.taskdesc}
                className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              ></textarea>
            </div>
            <div>
              <label htmlFor="time" className="font-semibold">
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
            <div>
              <label htmlFor="status" className="font-semibold pr-4">
                Status
              </label>
              <select
                type="datalist"
                name="status"
                id="status"
                value={taskData.status}
                onChange={handleChange}
              >
                <option value="--select--" selected className="font-semibold">
                  --select--
                </option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="On-Hold">On-Hold</option>
              </select>
            </div>
            <div
              className="mt-6 bg-blue-dark hover:bg-blue-faint text-center py-2 rounded border focus:outline-none"
              onClick={submit}
            >
              <div onClick={getTask()}>Add Task</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
