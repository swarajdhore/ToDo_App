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
          <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}

            <tr>
              {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
              {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
              <td className="w-1/5">{props.title}</td>
              <td className="w-1/3">{props.description}</td>
              <td className="w-1/10">{time}</td>
              <td
                className={`${
                  props.status === "Pending"
                    ? "visible w-1/6 "
                    : "invisible w-1/6"
                }`}
              >
                <Status id={props.id} title={props.title} description={props.description} time={props.time} status={props.status} />
              </td>
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                Delete
                <input type="checkbox" name="deleteTask" value={props.id} />
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
          <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}

            <tr>
              {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
              {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
              <td className="w-1/5">{props.title}</td>
              <td className="w-1/3">{props.description}</td>
              <td className="w-1/10">{time}</td>
              <td
                className={`${
                  props.status === "Completed"
                    ? "visible w-1/6 "
                    : "invisible w-1/6"
                }`}
              >
                <Status id={props.id} title={props.title} description={props.description} time={props.time} status={props.status} />
              </td>
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                Delete
                <input type="checkbox" name="deleteTask" value={props.id} />
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
          <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}

            <tr>
              {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
              {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
              <td className="w-1/5">{props.title}</td>
              <td className="w-1/3">{props.description}</td>
              <td className="w-1/10">{time}</td>
              <td
                className={`${
                  props.status === "On-Hold"
                    ? "visible w-1/6 "
                    : "invisible w-1/6"
                }`}
              >
                <Status id={props.id} title={props.title} description={props.description} time={props.time} status={props.status} />
              </td>
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                Delete
                <input type="checkbox" name="deleteTask" value={props.id} />
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
          <tbody>
            {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}

            <tr>
              {/* <td className="border-solid border-black-200 h-10 flex overflow-x-auto w-80 whitespace-nowrap">{props.key}</td> */}
              {/* border-solid border-black-200 h-10 flex overflow-x-auto w-70 whitespace-nowrap */}
              <td className="w-1/5">{props.title}</td>
              <td className="w-1/3">{props.description}</td>
              <td className="w-1/10">{time}</td>
              <td className="w-1/6">
              <Status id={props.id} title={props.title} description={props.description} time={props.time} status={props.status} />
              </td>
              <td
                className={`${
                  props.deleteT === true ? "visible w-1/8 " : "invisible w-1/8"
                }`}
                onClick={deleteNow}
              >
                Delete
                <input type="checkbox" name="deleteTask" value={props.id} />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
export default Task;

