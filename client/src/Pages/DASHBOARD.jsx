import React from "react";
import Nav from "../components/Dashboard/Nav";
import PageContent from "../components/Dashboard/PageContent";
import { getTask, Tasklist } from "../Redux/Reducer/Task/task.action";
// import { getUser } from "../Redux/Reducer/User/user.action";

function DASHBOARD() {
  return (
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
  );
}

export default DASHBOARD;
