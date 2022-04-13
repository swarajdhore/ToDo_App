import { Link } from "react-router-dom";
import Task from "../components/Task/Task"
import React from 'react';
import { getTask } from "../Redux/Reducer/Task/task.action";

// import { useDispatch } from "react-redux";
// import {getTask} from "../Redux/Reducer/Task/task.action";
// import {Tasklist} from "../Redux/Reducer/Task/task.action";
// import {useState} from "react";



export default function ToDoList() {
  //const dispatch = useDispatch();
  // const [taskData, setTaskData] = useState(() => {
  //   const tasks = localStorage.getItem("tasks");
  //   const savedTasks = JSON.parse(tasks);
  //   return savedTasks
  // });
  //console.log(localStorage.getItem("tasks"));
  
  if(localStorage.getItem("tasks"))
  {
    // const promise2 =  new Promise(Task);
    // const y = await promise2;
  
    // window.location.reload();
  const tasks = localStorage.getItem("tasks");    
  const savedTasks = JSON.parse(tasks);
  const taskList = savedTasks.tasks;
  console.log(taskList);
  window.onpaint = getTask();
  
  
  return (
    <div onload={getTask()} className="h-screen flex bg-gray-300">
      <div className="w-full max-wd- m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1>ToDoList</h1>
        <div className=" justify-start py-2 px-4 rounded border focus:outline-none">
          <Link to="/addtask">Add Task</Link>
        </div>
        
       <div onClick={getTask()}>Update Page</div>
        {/* <h2>{taskList[0].taskname}</h2>
        <div>{taskList[0].taskdesc}</div>
        <div>{taskList[0].time}</div> */}
         {/*  <Task name="assignment"
            status="incomplete"
          />
           <Task name="assignment"
            status="incomplete"
          /> */}
          <thead className="bg-gray-50">
              <tr className="px-1 py-3 text-mid text-lg font-medium text-gray-500 flex">
                <th className="border-solid  flex overflow-x-auto w-80">Name</th>
                <th className="border-solid  flex overflow-x-auto w-80">Description</th>
                <th className="border-solid  flex overflow-x-auto w-80">Date</th>
                <th className="border-solid  flex-initial w-80">Status</th>
              </tr>
            </thead>
          
          {taskList.map((taskList) => (
          <Task 
            title={taskList.taskname}
            description={taskList.taskdesc}
            time={taskList.time}
            status={taskList.status}
          />
          ))}
          {/* <Task /> */}
      </div>
    </div>
  );
  }
  else {
  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h1>ToDoList</h1>
        <button>
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1> No Task Found </h1>
        <div onClick={getTask()}>Click Here</div>
        
          {/* <div>
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
          </div> */}
      </div>
    </div>
  );}

  // const taskData = {
  //   name : tasks.taskname,
  //   description :  tasks.tsakdesc,
  //   date : tasks.time,
  // }
  // const tasksList = getTask();
  // console.log(tasksList);
        
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

