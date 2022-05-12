import React from "react";
import {Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/Reducer/Auth/auth.action";

export default function Logout(){
    const dispatch = useDispatch();
  const logOutHandler = (event) => {
    dispatch(logOut());
    event.preventDefault();
  }
  // hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium
  return <li className=" ">
               <Link onClick={logOutHandler} to="/">Logout</Link>
            </li>
    // return (<li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
    //          <button onClick={logOutHandler}> 
    //            <Link to="/">Logout</Link>
    //           </button>
    //         </li>);
}