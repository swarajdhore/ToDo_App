import ToDoList from "../../Pages/ToDoList";
import AddTasks from "../../Pages/AddTasks";
import Home from "../../Pages/Home";
import LoginPage from "../../Pages/LoginPage";
import RegisterPage from "../../Pages/RegisterPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function NavRoutes(params) {
  return (
    <div className="h-16">
      <Router>
        <div className="bg-blue-dark flex items-center justify-between">
          <h1 className="ml-0 pl-10 space-x-8">ToDoList</h1>
        </div>
        <div className="md:block bg-blue-dark">
          <ul className="ml-60 mr-20 pl-60 flex justify-end items-center space-x-8">
            <li className="hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
              <Link to="/">Home</Link>
            </li>
            <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
              <Link to="/todolist">ToDoList</Link>
            </li>
            <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
              <Link to="/login">Login</Link>
            </li>
            <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/addtask" element={<AddTasks />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default NavRoutes;
