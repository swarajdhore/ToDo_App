import { getTask } from "../Redux/Reducer/Task/task.action";
import { useState } from "react";
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

  const handleChange = (event) => {
    setTaskData((prev) => ({ ...prev, [event.target.id]: event.target.value }));

  };

  const submit = () => {

    const input = document.querySelector('input').value;
    console.log(input);

    if (input) {
      setTaskData({
        taskname: "",
        taskdesc: "",
        status: "",
        time: "",
      });
    }

    console.log(taskData.taskname)
    console.log(taskData.taskdesc)
    console.log(taskData.status)
    console.log(taskData.time)

    if (taskData.taskname && taskData.taskdesc && taskData.status && taskData.time) {
      var x = dispatch(addTask({
        taskname: taskData.taskname,
        taskdesc: taskData.taskdesc,
        status: taskData.status,
        time: taskData.time,
      }))
    }
    if (x)
      getTask();
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
                required
                className={`${taskData.taskname === "" ? "border-solid border-2 border-red-500 w-full p-2 text-primary  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" : `w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}`}
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
                required
                className={`${taskData.taskdesc === "" ? "border-solid border-2 border-red-500 w-full p-2 text-primary  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" : `w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}`}
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
                required
                className={`${taskData.time === "" ? "border-solid border-2 border-red-500 w-full p-2 text-primary  rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4" : `w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}`}
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
                required
              >
                <option value="--select--" selected className="font-semibold">
                  --select--
                </option>
                <option value="Pending" defaultValue={"Pending"}>Pending</option>
                <option value="Completed">Completed</option>
                <option value="On-Hold">On-Hold</option>
              </select>
            </div>
            <div
              className="mt-6 cursor-pointer bg-blue-dark hover:bg-blue-faint text-center py-2 rounded border focus:outline-none"
              // {...taskData.time&&taskData.title&&taskData.taskdesc&&taskData.status && }
              onClick={submit}
            // s
            >
              <div onClick={getTask}> Add Task </div>
              {/* <div > Add Task </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
