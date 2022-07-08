import React from "react";
import axios from "axios";
import Nav from "../components/Dashboard/Nav";
import PageContent from "../components/Dashboard/PageContent";
import { getTask } from "../Redux/Reducer/Task/task.action";
import EmailSent from "./EmailSent";

// import { User } from "../Redux/Reducer/User/user.action";

function DASHBOARD() {
  // const dispatch = useDispatch();

  return localStorage.getItem("verified") === "true" ? (
    <div onload={getTask()} className="antialiased bg-gray-100 overflow-hidden">
      <div
        // onload={getUser()}
        className="flex relative"
        x-data="{navOpen: false}"
      >
        <Nav />
        <PageContent />
      </div>
    </div>
  ) : (
    <EmailSent />
  );
}

export default DASHBOARD;
