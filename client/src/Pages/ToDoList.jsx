import { Link } from "react-router-dom";
import Task from "../components/Task/Task"
import React from 'react';
import { useDispatch } from "react-redux";
import {getTask} from "../Redux/Reducer/Task/task.action";
import {Tasklist} from "../Redux/Reducer/Task/task.action";

export default function ToDoList(props) {
  const dispatch = useDispatch();
  //const [taskData, setTaskData] = useState();
  //console.log(localStorage.getItem("tasks"));
  const tasks = localStorage.getItem("tasks");
  const taskData = {
    name : tasks.taskname,
    description :  tasks.tsakdesc,
    date : tasks.time,
  }
  // const tasksList = getTask();
  // console.log(tasksList);
  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1>ToDoList</h1>
        <button>
          <Link to="/addtask">Add Task</Link>
        </button>
        <h2>{taskData.name}</h2>
        <div>{taskData.description}</div>
        <div>{taskData.date}</div>
         {/*  <Task name="assignment"
            status="incomplete"
          />
           <Task name="assignment"
            status="incomplete"
          /> */}
          {/* {tasks.map((tasks) => { */}
          {/* <div onClick={getTask()}>Click Here</div> */}
          {/* <Task 
            title={tasks.taskname}
            description={tasks.taskdesc}
            time={tasks.time}
            status={tasks.status}
          />
          <Task /> */}
          {/* })} */}
          {/* <Task /> */}
          <div>
            <table className="table-auto">
            <thead>
              <tr className="flex">
                <th className="border-solid border-2 flex-initial w-60">Task</th>
                <th className="border-solid border-2 flex-initial w-70">Status</th>
              </tr>
            </thead>
            <tbody>

            </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}





























// class ToDoList extends Component  {
//   constructor(props) {
//     super(props);
  
//     // Setting up state
//     this.state = {
//       userInput : "",
//       list:[]
//     }
//   }
  
//   // Set a user input value
//   updateInput(value){
//     this.setState({
//       userInput: value,
//     });
//   }
  
//   // Add item if user input in not empty
//   addItem(){
//     if(this.state.userInput !== '' ){
//       const userInput = {
  
//         // Add a random id which is used to delete
//         id :  Math.random(),
  
//         // Add a user value to list
//         value : this.state.userInput
//       };
  
//       // Update list
//       const list = [...this.state.list];
//       list.push(userInput);
  
//       // reset state
//       this.setState({
//         list,
//         userInput:""
//       });
//     }
//   }
  
//   // Function to delete item from list use id to delete
//   deleteItem(key){
//     const list = [...this.state.list];
  
//     // Filter values and leave value which we need to delete
//     const updateList = list.filter(item => item.id !== key);
  
//     // Update list in state
//     this.setState({
//       list:updateList,
//     });
  
//   }
  
//   render(){
//     return(<Container>
  
//           <Row style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   fontSize: '3rem',
//                   fontWeight: 'bolder',
//                 }}
//                 >TODO LIST
//             </Row>
  
//            <hr/>
//           <Row>
//           <Col md={{ span: 5, offset: 4 }}>
  
//           <InputGroup className="mb-3">
//           <FormControl
//             placeholder="add item . . . "
//             size="lg"
//             value = {this.state.userInput}
//             onChange = {item => this.updateInput(item.target.value)}
//             aria-label="add something"
//             aria-describedby="basic-addon2"
//           />
//           <InputGroup.Append>
//             <Button
//               variant="dark"
//               size="lg"
//               onClick = {()=>this.addItem()}
//               >
//               ADD
//             </Button>
//           </InputGroup.Append>
//         </InputGroup>
  
//      </Col>
//    </Row>
//    <Row>
//      <Col md={{ span: 5, offset: 4 }}>
//         <ListGroup>
//           {/* map over and print items */}
//          {this.state.list.map(item => {return(
  
//             <ListGroup.Item variant="dark" action 
//               onClick = { () => this.deleteItem(item.id) }>
//               {item.value}
//             </ListGroup.Item>
  
//          )})}
//         </ListGroup>
//      </Col>
//    </Row>
//      </Container>
//     );
//   }
// }
  
// export default ToDoList;

