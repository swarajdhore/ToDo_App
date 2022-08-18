import React from "react";

import Logout from "../Logout/Logout";
function Profile() {
  // console.log(name);
  if (localStorage.getItem("todoAppUserName")) {
    const userName = localStorage.getItem("todoAppUserName");
    const savedUsers = JSON.parse(userName);
    const userList = savedUsers.fullName;

    console.log(userList);
    var fName = savedUsers;
  }
  return (
    <>
      <div className="text-gray-200 bg-black border-gray-800 rounded items-center  ">
        <div className="flex items-center space-x-2">
          <img
            src={`https://ui-avatars.com/api/?name=${fName}&size=128&background=0000FF&color=fff`}
            className="w-7 rounded-full"
            alt="Profile"
          />
          <a href="/profile">
            <h1>{fName}</h1>
          </a>
        </div>
        <br />
        <div>
          {/* <svg
            x-show="open"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg> */}
          {/* <svg
            x-show="!open"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg> */}
        </div>
        <div
          x-show="open"
          class="text-sm border-l-2 border-gray-800 mx-6  px-2.5 flex flex-col gap-y-1"
        >
          <div className="block hover:text-red-500">
            <Logout />
          </div>
        </div>



      </div>

    </>
  );
}

export default Profile;
