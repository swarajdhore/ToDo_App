import { Link } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AddTasks from "./AddTasks";
import { IoMdCloseCircle } from "react-icons/io";
// import AddTasks from "../../Pages/AddTasks";
// import Task from "../components/Task/Task"
//import {useState} from 'react';
// import { getTask, Tasklist } from "../Redux/Reducer/Task/task.action";
// import Pagination from "@material-ui/lab/Pagination";
// import usePagination from "../components/Pagination/pagination";
import "../components/Task/Task.css";
import { PaginationCompenent } from "../components/Pagination/PaginationCompenent";
import { _DATA } from "../components/Pagination/PaginationCompenent";

export default function ToDoList() {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  if (localStorage.getItem("tasks")) {
    var x = localStorage.getItem("tasks");
    const y = JSON.parse(x);
    console.log(y.tasks.length);
    if (y.tasks.length) {
      return <PaginationCompenent />;
    } else {
      return (
        <div className="overflow-hidden">
          <div className="h-screen flex ">
            <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
              {/* <div className="text-center">
        <button className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-4 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="my-6 font-semibold text-4xl"> No Task Found </h1>
        </div> */}
              <div>
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
                          <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h3"
                              className="text-center font-bold space-x-4 mb-3 text-lg  leading-6 text-gray-900"
                            >
                              No Task Found
                              <span className="mt-4 ml-64">
                                <button
                                  type="button"
                                  className=" inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-white-900 hover:bg-red-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                  onClick={closeModal}
                                >
                                  <IoMdCloseCircle />
                                </button>
                              </span>
                            </Dialog.Title>

                            {/* <AddTasks /> */}
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="overflow-hidden">
        <div className="h-screen flex ">
          <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
            {/* <div className="text-center">
        <button className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-4 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="my-6 font-semibold text-4xl"> No Task Found </h1>
        </div> */}
            <div>
              <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                        <Dialog.Panel className=" w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-center font-bold space-x-4 mb-3 text-lg  leading-6 text-gray-900"
                          >
                            No Task Found
                            <span className="mt-4 ml-64">
                              <button
                                type="button"
                                className=" inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-white-900 hover:bg-red-700 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                <IoMdCloseCircle />
                              </button>
                            </span>
                          </Dialog.Title>

                          {/* <AddTasks /> */}
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
