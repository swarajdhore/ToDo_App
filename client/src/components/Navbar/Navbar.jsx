import ToDoList from "../../Pages/ToDoList";
import AddTasks from "../../Pages/AddTasks";
import LoginPage from "../../Pages/LoginPage";
import RegisterPage from "../../Pages/RegisterPage";
import Home from "../../Pages/Home";
import Profile from "../Profile/Profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getMySelf, getUser } from "../../Redux/Reducer/User/user.action";
import GoogleAuth from "../../Pages/GoogleAuth";

import AOS from "aos";
import DASHBOARD from "../../Pages/DASHBOARD";
import ErrorPage from "../../Pages/ErrorPage";
import { ToastContainer } from "react-toastify";
import { Email } from "../Email/Email";
import EmailSent from "../Email/EmailSent";
import { getTask } from "../../Redux/Reducer/Task/task.action";

function Navbar() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("todoAppUser")) dispatch(getMySelf());
  }, []);
  //const location = useLocation();
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("div").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("div").style.scrollBehavior = "";
  });

  //  let location = useLocation();
  //   if (location.pathname.match(/login/)){
  //     return null;
  //   }
  //const ComponentThatHides = withRouter(Componen);

  if (localStorage.getItem("todoAppUser")) {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todolist" element={<ToDoList />}></Route>
            {/* <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route> */}
            <Route exact path="/addtask" element={<AddTasks />}></Route>
            {/* <Route path="/google/:token" element={<GoogleAuth/>}></Route> */}
            <Route exact path="/dashboard" element={<DASHBOARD />}></Route>
            <Route exact path="/profile" element={<Profile />}></Route>
            <Route exact path="/email" element={<Email />}></Route>
            <Route exact path="/emailsent" element={<EmailSent />}></Route>
            <Route
              exact
              path="/verify/:id/:token"
              element={<EmailSent />}
            ></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/todolist" element={<ToDoList />}></Route>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/register" element={<RegisterPage />}></Route>
            <Route exact path="/addtask" element={<AddTasks />}></Route>
            <Route
              exact
              path="/google/:token/:id"
              element={<GoogleAuth />}
            ></Route>
            <Route
              exact
              path="/verify/:id/:token"
              element={<EmailSent />}
            ></Route>
            <Route exact path="/email" element={<Email />}></Route>
            <Route exact path="/emailsent" element={<EmailSent />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default Navbar;
