import React from "react";
import Nav from "../Dashboard/Nav";
import { AiOutlineMail } from "react-icons/ai";
import { BsPatchCheck } from "react-icons/bs";

function Profile() {
  if (localStorage.getItem("todoAppUserName")) {
    const userName = localStorage.getItem("todoAppUserName");
    const savedUsers = JSON.parse(userName);
    const userList = savedUsers.fullName;
    const userEmail = localStorage.getItem("todoAppUserEmail");
    const savedEmail = JSON.parse(userEmail);


    console.log(userList);
    var fName = savedUsers;

    return (
      <div className="relative">
        <div className="visible absolute flex bg-gray-100">
          <Nav />
        </div>
        <div
          className=" font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover md:bg-[url('https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80')]"
        // style=""
        >
          <div className="mr-40 ml-80  max-w-4xl flex items-center h-auto lg:h-screen flex-wrap lg:my-0">
            <div
              id="profile"
              className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 my-12 lg:mx-0"
            >
              <div className="p-4 md:p-12 text-center lg:text-left">
                <div
                  className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                // style="
                // background-image: url('https://source.unsplash.com/MP0IUfwrn0A');
                //"
                ></div>
                <div className="w-full lg:w-2/5 inline text-center">
                  <img
                    // https://source.unsplash.com/MP0IUfwrn0A
                    src="data:image/jpeg;base64,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"
                    className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block h-30 w-30"
                  />
                </div>
                <h1 className="text-center text-3xl font-bold pt-8 lg:pt-0">
                  {fName}
                </h1>
                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                  <AiOutlineMail className="mx-2" />
                  Email: {savedEmail}
                </p>
                {localStorage.getItem("verified") ?
                  <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
                    <BsPatchCheck className="mx-2" style={{ color: "blue", fontSize: "1.5em" }} />
                    Verified User
                  </p> : ""}


                <p className="pt-8 text-sm">
                  These details are only private to you. Others cannot access it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
