import React from 'react'
// import Background_Image from './components/Background_Image/Background_Image';
import Navbar from './components/Navbar/Navbar';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import {Route, Routes} from "react-router-dom";
import ToDoList from "./Pages/ToDoList";
import AddTasks from "./Pages/AddTasks";
import MainBody from './Pages/MainBody';
// import GoogleAuth from './Pages/GoogleAuth';
// import HomeLayoutHOC from './HOC/Home.HOC';

function Main() {
  return (
  <>
    <div className=''>
        <Navbar/>
    </div>
    </>
  );
}

export default Main;