import React from "react";

import Logout from "../Logout/Logout";
function Profile() {
  // console.log(name);
  if (localStorage.getItem("username")) {
    const userName = localStorage.getItem("username");
    const savedUsers = JSON.parse(userName);
    const userList = savedUsers.fullName;

    console.log(userList);
    var fName = userList;
  }
  return (
    <div>
      <div className="text-gray-200 border-gray-800 rounded flex items-center  ">
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
        {/* <br /> */}
        <span>
          <Logout />
        </span>
      </div>
    </div>
  );
}

export default Profile;
