import Status from "./Status";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { deleteTask, updateTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { arr } from "../Pagination/PaginationCompenent";
import "./Task.css";



export var description;
function Task(props) {
  var dispatch = useDispatch();
  let [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [checkT, setCheckT] = useState(false);
  function handleEdit() {
    setEdit(!edit);
  }
  const [statusChangeData, setstatusChangeData] = useState({
    status: `${props.status}`,
    taskname: `${props.title}`,
    taskdesc: `${props.description}`,
    time: `${props.time}`,
    id: `${props.id}`,
  });

  function closeModal() {
    setIsOpen(false);
  }



  if (checkT)
    arr.push(props.id);
  if (checkT == false) {
    var index = arr.indexOf(props.id);

    if (index > -1) {
      arr.splice(index, 1);
    }
  }

  function openModal() {
    setIsOpen(true);
  }
  description = props.description;
  var timeiso = props.time;
  const d = new Date(timeiso);
  var time = d.toLocaleDateString().replace(/\//g, "-");
  console.log(time);

  const deleteNow = () => {
    console.log("Delete the task");
    console.log(props.id);
    dispatch(deleteTask(props.id));
  };

  const handleChange = (event) => {
    setstatusChangeData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };
  const saveTask = (settaskname, settaskdesc) => {
    setstatusChangeData({
      status: `${props.status}`,
      taskname: settaskname,
      taskdesc: settaskdesc,
      time: `${props.time}`,
      id: `${props.id}`,

    })
    console.log(statusChangeData)
  }
  return (
    <>
      <div class="bg-white  shadow rounded-sm my-2.5 overflow-x-auto">
        <table class=" w-100 table-fixed">
          <tbody class="text-gray-600  text-sm">
            <tr class="  border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6  whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 ">
                <div class="flex items-center">
                  <span>{props.description.substring(0, 10) + "..."}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{time}</td>
              <td class="py-3 px-6 text-center">
                {/* <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"> */}
                <Status
                  id={props.id}
                  title={props.title}
                  description={props.description}
                  time={props.time}
                  status={props.status}
                />
                {/* </span> */}
              </td>
              <td class="py-3 px-6 text-center">
                <div class="flex item-center justify-center">
                  <div class="md:w-4 md:mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                                  <div className="flex justify-between" >
                                    <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                      Task Details
                                    </Dialog.Title>
                                    {/* <p onClick={handleEdit} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110  cursor-pointer">
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
                                    </p> */}
                                  </div>
                                  <div className="mt-2">
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Title:
                                      </h1>
                                      <p id="title" className={`${edit ? "border-solid border-2 border-black focus-visible active text-md px-0.5 py-2" : "text-md px-0.5 py-2"}`} contentEditable={edit}>
                                        {props.title}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Description:
                                      </h1>
                                      <p id="description" className={`${edit ? "border-solid border-2 border-black focus-visible active text-md px-0.5 py-2" : "text-md px-0.5 py-2"}`} contentEditable={edit}>
                                        {description}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Date and Time:
                                      </h1>
                                      <p id="time" className="text-md px-0.5 py-2" contentEditable={edit}>
                                        {time}
                                      </p>
                                    </p>
                                    <p className="flex text-l text-gray-500">
                                      <h1 className="text-md px-2 font-bold py-2">
                                        Status:
                                      </h1>
                                      <p id="status" className="text-md px-0.5 py-2" contentEditable={edit}>
                                        {props.status}
                                      </p>
                                    </p>
                                  </div>

                                  <div className="mt-4 flex justify-between">
                                    <button
                                      type="button"
                                      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-500 hover:border-transparent rounded"
                                      onClick={closeModal}
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      // 
                                      className={`${edit
                                        ? "visible bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                                        : "invisible"
                                        }`}
                                      onClick={saveTask}
                                    >
                                      Save
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
                  {/* <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
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
                  </div> */}
                  <div
                    className={`${props.deleteT === true
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
                    className={`${props.deleteT === true
                      ? "visible w-1/8 w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer"
                      : "invisible w-1/8"
                      }`}
                  >
                    <span class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110  ">
                      <input

                        type="checkbox"
                        name="deleteTask"
                        value={props.id}
                        id="myCheck"
                        onClick={() => setCheckT((prev) => !prev)}
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
