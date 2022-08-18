import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/Reducer/Auth/auth.action";
import { FiLogOut } from "react-icons/fi";

export default function Logout() {
  const dispatch = useDispatch();
  const logOutHandler = (event) => {
    dispatch(logOut());
    event.preventDefault();
    localStorage.removeItem();
  };
  // hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium hover:text-red-500
  return (
    <div className="list-none  space-between ">
      <Link onClick={logOutHandler} to="/">
        <FiLogOut className="inline" />

        <span className="">Logout</span>
      </Link>
    </div>
  );
  // return (<li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
  //          <button onClick={logOutHandler}>
  //            <Link to="/">Logout</Link>
  //           </button>
  //         </li>);
}
