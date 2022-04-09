import { useState } from "react";

function AddTasks() {
  const [enteredDate, setEnteredDate] = useState("");
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  };
  const [enteredTask, setEnteredTask] = useState("");
  const taskHandler = (event) => {
    setEnteredTask(event.target.value);
    console.log(event.target.value);
  };
  const [enteredDescription, setEnteredDescription] = useState("");
  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <form className="add-task" onSubmit={submitHandler}>
          <div className="data-input">
            <label htmlFor="date" className="text-gray-600 font-medium">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={enteredDate}
              onChange={dateHandler}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <div className="task-input">
            <label htmlFor="task" className="text-gray-600 font-medium">
              Task
            </label>
            <input
              type="text"
              name="task"
              value={enteredTask}
              onChange={taskHandler}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            />
          </div>
          <div className="task-description-input">
            <label htmlFor="description" className="text-gray-600 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={enteredDescription}
              onChange={descriptionHandler}
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
            ></textarea>
          </div>
          <div>
            <button className="justify-end bg-green-500 py-2 px-4 text-sm text-white font-bold rounded border border-green focus:outline-none focus:border-green-default">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTasks;
