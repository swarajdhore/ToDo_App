import { Link } from "react-router-dom";
import Task from "../components/Task/Task"
import React from 'react';
import { getTask } from "../Redux/Reducer/Task/task.action";
import Background_Image from "../components/Background_Image/Background_Image";
import "../components/Task/Task.css";

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
  // const keys = Object.keys(taskList[(taskList.length)-1]);
  // const idvalue = taskList[(taskList.length)-1][keys[4]];
  
  
  return (
    <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500" >    
    
    <div  onload={getTask()} className="h-screen flex bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <div className="w-full my-40 shadow-default py-10 px-8">
     <div className="text-center mb-4">
        <h1 className="font-semibold text-xl">ToDoList</h1>
        <div className="bg-blue-dark hover:bg-blue-faint justify-start py-2 my-2 rounded border focus:outline-none ">
          <Link to="/addtask">Add Task</Link>
        </div>
       <div className="bg-blue-dark hover:bg-blue-faint justify-start py-2 px-2 my-2 rounded border focus:outline-none"
        onClick={getTask()}>
        Update Page
        </div>
        </div>
        {/* <h2>{taskList[0].taskname}</h2>
        <div>{taskList[0].taskdesc}</div>
        <div>{taskList[0].time}</div> */}
         {/*  <Task name="assignment"
            status="incomplete"
          />
           <Task name="assignment"
            status="incomplete"
          /> */}
          <table>
          <thead>
          {/* px-1 py-3 text-mid text-lg font-medium text-gray-500 flex */}
              <tr>
              {/* border-solid  flex overflow-x-auto w-50 */}
                <th className="w-1/5">Name</th>
                <th className="w-1/2">Description</th>
                <th >Date</th>
                <th className="w-1/6">Status</th>
                {/* <th>{taskList._id}</th> */}
                {/* <th>{idvalue}</th> */}
              </tr>
              </thead>
              </table>
          {taskList.slice(0)
           .reverse().map((taskList) => (
          <Task 
            key={taskList._id} // to take id from DB
            title={taskList.taskname}
            description={taskList.taskdesc}
            time={taskList.time}
            status={taskList.status} 
          />
          ))}
          
            
          
          {/* <Task /> */}
      
    </div>
  </div>
    </div>
  );
 
  }
  else {
  return (
    <div className=" h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="h-screen flex bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-2/4 my-32 ml-60 shadow-default py-10 px-8">
        <div className="text-center">
          <h1 className="font-semibold text-xl">ToDoList</h1>
        <button className=" ">
          <Link to="/addtask">Add Task</Link>
        </button>
        <h1 className="font-semibold text-lg"> No Task Found </h1>
        <div className="" onClick={getTask()}>Click Here</div>
        </div>
        
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

