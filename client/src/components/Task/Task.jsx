import Status from "./Status";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {  deleteTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./Task.css";

export var description;
function Task(props) {
  
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  let taskids=[];
  var arr_ids
  const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  var taskList = savedTasks.tasks;
  const keys = Object.keys(taskList[(taskList.length)-1]);
  const idvalue = taskList[(taskList.length)-1][keys[4]];
  for(let i=0;i<=(taskList.length)-1;i++)
{
  taskids[i]=taskList[i][keys[4]]
  arr_ids[i]=0
}
  const [arr_id, setArr_Id] = useState([]);

const handleDelete = (event) => {
  // let arr_ids=[];
  
 



console.log(arr_ids)
let x;
for(let i=0;i<taskList.length;i++)
{
  if(props.id == taskids[i])
    x= i;
}

console.log(x)

   arr_ids =  arr_ids.splice(x, 1, props.id) ;
    console.log(arr_ids);

}

  function openModal() {
    setIsOpen(true);
  }

  description = props.description;
  var timeiso = props.time;
  const d = new Date(timeiso);
  var time = d.toLocaleDateString().replace(/\//g, "-");
  console.log(time);
  const dispatch = useDispatch();

  const deleteNow = () => {
    console.log("Delete the task");
    console.log(props.id);
    dispatch(deleteTask(props.id));
  };
  return (
    <>
      <div class="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
        <table class="min-w-max w-full table-auto">
          <tbody class="text-gray-600 text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                  <span>{props.description.substring(0, 10) + "..."}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{props.time}</td>
              <td class="py-3 px-6 text-center">
                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                  <Status
                    id={props.id}
                    title={props.title}
                    description={props.description}
                    time={props.time}
                    status={props.status}
                  />
                </span>
              </td>
              <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <svg
                      onClick={openModal}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                      <Transition appear show={isOpen} as={Fragment}>
                        <Dialog
                          as="div"
                          className="relative z-10"
                          onClose={closeModal}
                        >
                          <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                          </Transition.Child>

                          <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                              <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                              >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                    Task Details
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Title:
                                      </h1>
                                      <p className="text-md px-0.5 py-2">
                                        {props.title}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Description:
                                      </h1>
                                      <p className="text-md px-0.5 py-2">
                                        {description}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Date and Time:
                                      </h1>
                                      <p className="text-md px-0.5 py-2">
                                        {props.time}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Status:
                                      </h1>
                                      <p className="text-md px-0.5 py-2">
                                        {props.status}
                                      </p>
                                    </p>
                                  </div>

                                  <div className="mt-4">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center rounded-md border border-transparent bg-red-300 px-4 py-2 text-sm font-medium text-white-900 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                      onClick={closeModal}
                                    >
                                      Close
                                    </button>
                                  </div>
                                </Dialog.Panel>
                              </Transition.Child>
                            </div>
                          </div>
                        </Dialog>
                      </Transition>
                    </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      props.deleteT === true
                        ? "visible w-1/8 w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer"
                        : "invisible w-1/8"
                    }`}
                    onClick={deleteNow}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      props.deleteT === true
                        ? "visible w-1/8 w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer"
                        : "invisible w-1/8"
                    }`}
                  >
                    <span class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110  ">
                      <input
                      onClick={handleDelete}
                        type="checkbox"
                        name="deleteTask"
                        value={props.id}
                        id="myCheck"
                        // onChnage={e => {
                        //   var value = e.target.checked;
                        //  setId (id.map(d => {
                        //    d.select = value;
                        //    return d;
                        //  }))
                        // }}
                        
                      />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Task;
