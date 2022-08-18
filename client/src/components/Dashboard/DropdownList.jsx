import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import AddTasks from "../../Pages/AddTasks";
import MyModal from "../Modals/addtask.modal";
import { IoMdCloseCircle } from "react-icons/io";

function DropdownList() {
  const [dropdown, setDropdown] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function handleChange() {
    setDropdown(true);
  }

  return (
    <div>
      <div className="block bg-black" x-data="{open: false}">
        <div
          onClick={handleChange}
          className={`flex items-center justify-between hover:bg-gray-800 text-white cursor-pointer my-2 py-2.5 px-4 rounded  `}
        >
          <div class="flex items-center  space-x-2">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              ></path>
            </svg>
            <span>Menu</span>
          </div>
          <svg
            x-show="open"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
          <svg
            x-show="!open"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        <div
          x-show="open"
          class="text-sm border-l-2 border-gray-800 mx-6 my-2.5 px-2.5 flex flex-col gap-y-1"
        >
          <button>
            <a
              href="/dashboard"
              class="block py-2 px-4 hover:bg-gray-800 text-white rounded"
            >
              Dashboard
            </a>
          </button>
          <button>
            <a
              // href="/addtask"
              onClick={openModal}
              class="block py-2 px-4 hover:bg-gray-800 text-white rounded"
            >
              Add Task
              {/* {setIsOpen && <MyModal />} */}
            </a>
          </button>
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
                          Add Tasks
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

                        <AddTasks />
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>

          <button>
            <a
              href="/"
              class="block py-2 px-4 hover:bg-gray-800 text-white rounded"
            >
              Home
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DropdownList;
