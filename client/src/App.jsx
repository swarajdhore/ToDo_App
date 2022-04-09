import ToDoList from "./components/homepage/ToDoList";
import AddTasks from "./components/homepage/AddTasks";
import Home from "./components/homepage/Home";
import LoginPage from "./components/loginpage/LoginPage";
import RegisterPage from "./components/loginpage/RegisterPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Router className="nav-bar-wrapper">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <ul className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <li className="nav-bar-links_home">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-bar-links_todolist">
                <Link to="/todolist">ToDoList</Link>
              </li>
              <li className="nav-bar-links_login">
                <Link to="/login">Login</Link>
              </li>
              <li className="nav-bar-links_register">
                <Link to="/Register">Register</Link>
              </li>
            </ul>
          </div>
        </nav>
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

export default App;
