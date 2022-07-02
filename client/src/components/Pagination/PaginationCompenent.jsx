import { useState } from "react";
import { Link } from "react-router-dom";
import Task from "../Task/Task";
import { getTask } from "../../Redux/Reducer/Task/task.action";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "./pagination";
import "../Task/Task.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calandar.css";

export function PaginationCompenent() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  today = mm + "-" + dd;
  console.log(today);
  const [deleteT, setDeleteT] = useState(false);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(today);
  const [filter, setFilter] = useState(true);

  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };

  const handleCLickForFilter = () => {
    setFilter(false);
  };

  const handleCLickForFilter2 = () => {
    setFilter(true);
  };

  const handleClick = (event) => {
    setDate(event.target.value);
  };

  const handleChange1 = (event) => {
    setSearch(() => ([event.target.id] = event.target.value));
  };

  const deleteTHandler = () => {
    setDeleteT((deleteT = true));
  };

  const tasks = localStorage.getItem("tasks");
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  const [page, setPage] = useState(1);

  const PER_PAGE = 5;

  const count = Math.ceil(taskList.length / PER_PAGE);

  var _DATA = usePagination(taskList.reverse(), PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  // console.log(taskList);
  // console.log(taskList);
  window.onpaint = getTask();

  if (filter === false) {
    return (
      <div className="overflow-hidden">
        {/* */}
        <div onload={getTask()} className="flex  ">
          <div className="w-full  shadow-default  px-8">
            <div className="text-center mb-4">
              <h1 className=" font-semibold text-4xl">All Tasks</h1>
              <div className="content-center">
                <div className="flex flex-wrap space-x-4">
                  {/* <div className="bg-blue-dark hover:bg-blue-faint px-8 py-2 my-2 rounded border focus:outline-none ">
                    <Link to="/addtask">Add Task</Link>
                  </div> */}
                  {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={getTask()}>
        Update Page
      </div> */}
                  <div
                    className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
                    onClick={() => setDeleteT((prevDelete) => !prevDelete)}
                  >
                    Delete
                  </div>
                  <div
                    className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
                    onClick={handleCLickForFilter}
                  >
                    All Task
                  </div>
                  <div
                    className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
                    onClick={handleCLickForFilter2}
                  >
                    Today's Task
                  </div>
                  <div className="items-end mt-2 ">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="search"
                      onChange={handleChange1}
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="calendar-container left-0">
              <Calendar value={dateState} onChange={changeDate} />
            </div> */}

            <div className="m-10">
              <Pagination
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </div>
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-left">Description</th>
                  <th class="py-3 px-6 text-center">Date</th>
                  <th class="py-3 px-6 text-center">Status</th>
                  <th
                    className={`${
                      deleteT === true
                        ? "visible py-3 px-6 text-center"
                        : "invisible"
                    }`}
                  >
                    Delete
                  </th>
                </tr>
              </thead>
            </table>
            {search === ""
              ? _DATA
                  .currentData()
                  .filter((taskList) => {
                    if (search === "") {
                      return taskList;
                    } else if (
                      taskList.taskname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return taskList;
                    } else if (
                      taskList.status
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return taskList;
                    } else if (taskList.time.includes(search)) {
                      return taskList;
                    }
                  })
                  .slice(0)
                  .map((taskList) => {
                    return (
                      <div>
                        <Task
                          id={taskList._id} // to take id from DB
                          title={taskList.taskname}
                          description={taskList.taskdesc}
                          time={taskList.time}
                          status={taskList.status}
                          deleteT={deleteT}
                        />
                      </div>
                    );
                  })
              : taskList
                  .filter((taskList) => {
                    if (search === "") {
                      return taskList;
                    } else if (
                      taskList.taskname
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return taskList;
                    } else if (
                      taskList.status
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return taskList;
                    } else if (taskList.time.includes(search)) {
                      return taskList;
                    }
                  })
                  .slice(0)
                  .map((taskList) => {
                    return (
                      <div>
                        <Task
                          id={taskList._id} // to take id from DB
                          title={taskList.taskname}
                          description={taskList.taskdesc}
                          time={taskList.time}
                          status={taskList.status}
                          deleteT={deleteT}
                        />
                      </div>
                    );
                  })}

            <div className="m-10">
              <div className="m-10">
                <Pagination
                  count={count}
                  size="large"
                  page={page}
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="overflow-hidden">
        {/* */}
        <div onload={getTask()} className="flex">
          <div className="w-full shadow-default  px-8">
            <div className="text-center mb-4">
              <h1 className=" font-semibold text-4xl">Today's Tasks</h1>
              <div className="content-center my-16">
                <div className="flex flex-wrap space-x-4">
                  {/* <div className="bg-blue-dark hover:bg-blue-faint px-8 py-2 my-2 rounded border focus:outline-none ">
                    <Link to="/addtask">Add Task</Link>
                  </div> */}
                  {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={getTask()}>
        Update Page
      </div> */}
                  <div
                    className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
                    onClick={() => setDeleteT((prevDelete) => !prevDelete)}
                  >
                    Delete
                  </div>
                  <div
                    className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
                    onClick={handleCLickForFilter}
                  >
                    All Task
                  </div>
                  {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
      onClick={handleCLickForFilter} >
        Today's Task
      </div> */}
                  <div className="items-end mt-2 ">
                    <input
                      type="text"
                      placeholder="Search.."
                      name="search"
                      onChange={handleChange1}
                      className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <Calendar value={dateState} onChange={changeDate} /> */}
            {/* <div className="m-10">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        /> 
      </div>  */}
            <table className="mt-2">
              <thead>
                {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
                <tr>
                  {/* border-solid  flex overflow-x-auto w-50 */}
                  <th className="w-1/5">Name</th>
                  <th className="w-1/3">Description</th>
                  <th className="w-1/8">Date</th>
                  <th className="w-1/6">Status</th>
                  <th
                    className={`${
                      deleteT === true ? "visible w-1/8" : "invisible w-1/8"
                    }`}
                  >
                    Delete
                  </th>
                </tr>
              </thead>
            </table>
            <div>{taskList.time}</div>

            {taskList
              .slice(0)
              .filter((taskList) => {
                var tasktime = taskList.time.slice(5, 10);
                const d = new Date(tasktime);
                {
                  /* var tasktime1 = d.toLocaleDateString().replace(/\//g, "-");
              tasktime1 = tasktime1.toLocaleString();
              var tasktime1 = tasktime.toLocaleDateString().replace(/\//g, "-"); */
                }
                console.log(tasktime);
                if (tasktime == today) {
                  return taskList;
                }
              })
              .filter((taskList) => {
                if (search === "") {
                  return taskList;
                } else if (
                  taskList.taskname.toLowerCase().includes(search.toLowerCase())
                ) {
                  return taskList;
                } else if (
                  taskList.status.toLowerCase().includes(search.toLowerCase())
                ) {
                  return taskList;
                } else if (taskList.time.includes(search)) {
                  return taskList;
                }
              })
              .map((taskList) => {
                return (
                  <div>
                    <Task
                      id={taskList._id} // to take id from DB
                      title={taskList.taskname}
                      description={taskList.taskdesc}
                      time={taskList.time}
                      status={taskList.status}
                      deleteT={deleteT}
                    />
                  </div>
                );
              })}

            {/* <div className="m-10">
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div> */}
          </div>
        </div>
      </div>
    );
  }
}
