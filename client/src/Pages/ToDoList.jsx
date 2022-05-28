import { Link } from "react-router-dom";
import Task from "../components/Task/Task"
import {useState} from 'react';
import { getTask, Tasklist } from "../Redux/Reducer/Task/task.action";
import Pagination from "@material-ui/lab/Pagination";
import usePagination from "../components/Pagination/pagination";
import "../components/Task/Task.css";

export default function ToDoList() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '-' + dd + '-' + yyyy;
  console.log(today);

  const [deleteT, setDeleteT] = useState(false);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(today);
  const [filter, setFilter] = useState(true);

  const handleCLickForFilter = () => {
    setFilter(false);
  }

  const handleCLickForFilter2 = () => {
    setFilter(true);
  }

  const handleClick = (event) => {
    setDate(event.target.value);
  }

  const handleChange1 = (event) => {
    setSearch(() => ([event.target.id]= event.target.value));
  }

  const tasks = localStorage.getItem("tasks");    
    const savedTasks = JSON.parse(tasks);
    const taskList = savedTasks.tasks;
    console.log(taskList);
  let [page, setPage] = useState(1);
  const PER_PAGE = 5;

  const count = Math.ceil(taskList.length / PER_PAGE);
  const _DATA = usePagination(taskList.reverse(), PER_PAGE);

  const handleChange = (p) => {
    setPage(p);
    _DATA.jump(p);
  }

  // var result;
  if(localStorage.getItem("tasks"))
  {
    const tasks = localStorage.getItem("tasks");    
    const savedTasks = JSON.parse(tasks);
    const taskList = savedTasks.tasks;
    console.log(taskList);
    window.onpaint = getTask();
    // var x;
    // const keys = Object.keys(taskList[(taskList.length)-1]);
    // const idvalue = taskList[(taskList.length)-1][keys[4]];
    if (filter === false) {
      return (
    // bg-gradient-to-r from-violet-500 to-fuchsia-500
    <div className="" >    
    {/* */}
    <div  onload={getTask()} className="flex bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
    <div className="w-full my-40 shadow-default py-10 px-8">
     <div className="text-center mb-4">
     <h1 className="my-4 font-semibold text-4xl">ToDoList</h1>
     <div className="content-center">
     <div className="flex space-x-5">
      <div className="bg-blue-dark hover:bg-blue-faint px-8 py-2 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
      </div>
      {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={getTask()}>
        Update Page
      </div> */}
      <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={() => setDeleteT((prevDelete) => !prevDelete)}>
        Delete
      </div>
      <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
      onClick={handleCLickForFilter} >
        All Task
      </div>
      <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
      onClick={handleCLickForFilter2} >
        Today's Task
      </div>
      <div  className="items-end mt-2 " >
          <input type="text" placeholder="Search.." name="search" onChange={handleChange1}  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`} />
      </div>
      </div>
      </div>
      </div>
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
        <table>
          <thead>
          {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
              <tr>
              {/* border-solid  flex overflow-x-auto w-50 */}
                <th className="w-1/5">Name</th>
                <th className="w-1/3">Description</th>
                <th className="w-1/8">Date</th>
                <th className="w-1/6">Status</th>
                <th className={`${deleteT === true ? "visible w-1/8" : "invisible w-1/8" }`}>Delete</th>
              </tr>
          </thead>
        </table>
          {
            _DATA.currentData().filter((taskList) => {
              if (search === "") {
                return taskList;
              } else if (taskList.taskname.toLowerCase().includes(search.toLowerCase())) {
                return taskList;
              }
              else if (taskList.status.toLowerCase().includes(search.toLowerCase())) {
                return taskList;
              }
              else if (taskList.time.includes(search)) {
                return taskList;
              }
              }).slice(0)
               .map((taskList) => {
                 return(
                 <div>
                  <Task 
                      key={taskList._id} // to take id from DB
                      title={taskList.taskname}
                      description={taskList.taskdesc}
                      time={taskList.time}
                      status={taskList.status}
                      deleteT={deleteT}
                  />
                </div>
                )
              })
            } 
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
  );
  } else {
    return (
    // bg-gradient-to-r from-violet-500 to-fuchsia-500
    <div className="" >    
    {/* */}
    <div  onload={getTask()} className="flex bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
    <div className="w-full my-40 shadow-default py-10 px-8">
     <div className="text-center mb-4">
     <h1 className="my-4 font-semibold text-4xl">ToDoList</h1>
     <div className="content-center">
     <div className="flex space-x-5">
      <div className="bg-blue-dark hover:bg-blue-faint px-8 py-2 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task 11111111</Link>
      </div>
      {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={getTask()}>
        Update Page
      </div> */}
      <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
        onClick={() => setDeleteT((prevDelete) => !prevDelete)}>
        Delete
      </div>
      <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
      onClick={handleCLickForFilter} >
        All Task
      </div>
      {/* <div className="bg-blue-dark hover:bg-blue-faint px-8  py-2 my-2  rounded border focus:outline-none"
      onClick={handleCLickForFilter} >
        Today's Task
      </div> */}
      <div  className="items-end mt-2 " >
          <input type="text" placeholder="Search.." name="search" onChange={handleChange1}  className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`} />
      </div>
      </div>
      </div>
      </div>
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
        <table>
          <thead>
          {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
              <tr>
              {/* border-solid  flex overflow-x-auto w-50 */}
                <th className="w-1/5">Name</th>
                <th className="w-1/3">Description</th>
                <th className="w-1/8">Date</th>
                <th className="w-1/6">Status</th>
                <th className={`${deleteT === true ? "visible w-1/8" : "invisible w-1/8" }`}>Delete</th>
              </tr>
          </thead>
        </table>
        <div>{taskList.time}</div>
      
          {
            _DATA.currentData().slice(0).filter((taskList) => {
              var tasktime = taskList.time;
              var tasktime1 = tasktime;
            if (tasktime1 === today) {
              return taskList;
            }
           })
           .map((taskList) => {
             return(
               <div>
                 <Task 
                   key={taskList._id} // to take id from DB
                   title={taskList.taskname}
                   description={taskList.taskdesc}
                   time={taskList.time}
                   status={taskList.status}
                   deleteT={deleteT}
                 />
               </div>
             )
           })
          
          }

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
  );
  }
}
 else {
  return (
    // bg-gradient-to-r from-violet-500 to-fuchsia-500
    <div className=" h-14">
      <div className="h-screen flex bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
        <div className="text-center">
        <button className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-4 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="my-6 font-semibold text-4xl"> No Task Found </h1>
        {/* <div className="" onClick={getTask()}>Click Here</div> */}
        </div>
      </div>
     </div>
    </div>
  );}     
}