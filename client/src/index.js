import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ToDoList from "./components/homepage/ToDoList";
import LoginPage from "./components/loginpage/LoginPage";
import RegisterPage from "./components/loginpage/RegisterPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/todolist">ToDoList</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todolist" element={<ToDoList />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
