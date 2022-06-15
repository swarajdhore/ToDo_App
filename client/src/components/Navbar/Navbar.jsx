import ToDoList from "../../Pages/ToDoList";
import AddTasks from "../../Pages/AddTasks";
import LoginPage from "../../Pages/LoginPage";
import RegisterPage from "../../Pages/RegisterPage";
import Home from "../../Pages/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { getMySelf } from "../../Redux/Reducer/User/user.action";
import GoogleAuth from "../../Pages/GoogleAuth";

import AOS from "aos";
import DASHBOARD from "../../Pages/DASHBOARD";

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
            <Route path="" element={<Home />} />
            <Route path="/todolist" element={<ToDoList />}></Route>
            {/* <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route> */}
            <Route path="/addtask" element={<AddTasks />}></Route>
            {/* <Route path="/google/:token" element={<GoogleAuth/>}></Route> */}
            <Route path="/dashboard" element={<DASHBOARD />}></Route>
          </Routes>
        </Router>
      </>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/addtask" element={<AddTasks />}></Route>
          <Route path="/google/:token/:id" element={<GoogleAuth />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default Navbar;
