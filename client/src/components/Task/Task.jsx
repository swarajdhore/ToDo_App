import Status from "./Status";
import { getTask, deleteTask } from "../../Redux/Reducer/Task/task.action";
// import { addTask } from "../../Redux/Reducer/Task/task.action";
import { useDispatch } from "react-redux";
import "./Task.css";

// export var deleteT = false;

function Task(props) {
  // console.log("Hello");
  //const time = props.time.toLocaleString("en-US", { day: "2-digit" });
  //const time = props.time.toISOString().substring(0, 10);
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
  if (props.status === "Pending") {
    return (
      <>
        {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
        <table>
          {/* bg-gray-50 */}
          <tbody class="text-gray-600 text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span>{props.description}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{time}</td>
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
              {/* className="py-3 px-6 text-center" */}
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <input type="checkbox" name="deleteTask" value={props.id} />
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else if (props.status === "Completed") {
    return (
      <>
        {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
        <table>
          {/* bg-gray-50 */}
          <tbody class="text-gray-600 text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span>{props.description}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{time}</td>
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
              {/* className="py-3 px-6 text-center" */}
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <input type="checkbox" name="deleteTask" value={props.id} />
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else if (props.status === "On-Hold") {
    return (
      <>
        {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
        <table>
          {/* bg-gray-50 */}
          <tbody class="text-gray-600 text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span>{props.description}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{time}</td>
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
              {/* className="py-3 px-6 text-center" */}
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <input type="checkbox" name="deleteTask" value={props.id} />
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        {/* min-w-full divide-y divide-gray-200 table-fixed border-separate */}
        <table>
          {/* bg-gray-50 */}
          <tbody class="text-gray-600 text-sm">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">
                {props.title}
              </td>
              <td class="py-3 px-6 text-left">
                <div class="flex items-center">
                  <div class="mr-2">
                    <img
                      class="w-6 h-6 rounded-full"
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                    />
                  </div>
                  <span>{props.description}</span>
                </div>
              </td>
              <td class="py-3 px-6 text-center">{time}</td>
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
              {/* className="py-3 px-6 text-center" */}
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                    <input type="checkbox" name="deleteTask" value={props.id} />
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default Task;
