// // import Navbar from "./components/Navbar/Navbar";
// // import Home from "./Pages/Home";
// // import ToDoList from "./Pages/ToDoList";
// // import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// // import AddTasks from "./Pages/AddTasks";
// import ToDoList from "../../Pages/ToDoList";
// import AddTasks from "../../Pages/AddTasks";
// import Home from "../../Pages/Home";
// import LoginPage from "../../Pages/LoginPage";
// import RegisterPage from "../../Pages/RegisterPage";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// // import {isLoggedIn} from "../../Pages/LoginPage";
// // import { logOut } from "../../Redux/Reducer/Auth/auth.action";
// import React from "react";
// // import { useDispatch } from "react";
// import Logout from "../Logout/Logout";
// import { getTask } from "../../Redux/Reducer/Task/task.action";
// import Logo from "../Logo/Logo";

// function App() {
//   if (localStorage.todoAppUserID)
//   {
//     return (
//     <Router>
//       <div className="h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 sticky top-0">
//         <div className=" absolute left-0">
//           <Logo />
//         </div>
//         <div onload={getTask()} className="md:block  absolute right-0 ">
//           <ul className="flow-root space-x-8 mr-8 mt-6 font-md">
//             {/* <li className="hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/">Home</Link>
//             </li> */}
//             {/* hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium */}
//              <li onClick={getTask()} className="float-left hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/todolist" >ToDoList</Link>
//             </li> 
//              <li className="float-right hover:bg-blue-faint rounded-md text-lg px-1 py-1"><Logout /></li>
             
//             {/* <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/login">Login</Link>
//             </li>
//             <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/Register">Register</Link>
//             </li> */}
//           </ul>
//         </div>
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/todolist" element={<ToDoList />}></Route>
//           {/* <Route path="/login" element={<LoginPage />}></Route>
//           <Route path="/register" element={<RegisterPage />}></Route> */}
//           <Route path="/addtask" element={<AddTasks />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
//   }
//   else {
//     return (

//     <div className="h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 sticky top-0">
//       <Router>
//       <div className=" absolute left-0">
//           <Logo />
//         </div>
        
//         <div className="md:block  absolute right-0 ">
//           <ul className="flow-root space-x-8 mr-8 mt-6 font-md">
//             {/* <li className="hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/">Home</Link>
//             </li>
//             <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/todolist">ToDoList</Link>
//             </li> */}
//             <li className="float-left hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/login">Login</Link>
//             </li>
//             <li className="float-right hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/Register">Register</Link>
//             </li>
//           </ul>
//         </div>
//         <Routes>
//           {/* <Route path="/" element={<Home />} /> */}
//           <Route path="/todolist" element={<ToDoList />}></Route>
//           <Route path="/login" element={<LoginPage />}></Route>
//           <Route path="/register" element={<RegisterPage />}></Route>
//           <Route path="/addtask" element={<AddTasks />}></Route>
//         </Routes>
//         </Router>
        
//     </div>
//   )}
// }
//   // return (
//   //   <div>
//   //      {/* <Navbar/> */}
//   //      {/* <ToDoList /> */}
//   //     <Router>
//   //      <Routes>
//   //         <Route path="/" element={<Home/>} />
//   //         <Route path="/todolist" element={<ToDoList />}></Route>
//   //         {/* <Route path="/login" element={<LoginPage />}></Route>
//   //         <Route path="/register" element={<RegisterPage />}></Route> */}
//   //         <Route path="/addtask" element={<AddTasks />}></Route>
//   //       </Routes>
//   //       </Router>
       
//   //   </div>
//   // );

// export default App;
import Navbar from "./components/Navbar/Navbar"
function App() {
  return(
   <div><Navbar/></div>
  )
}

export default App;