import React from "react";
import Nav from "../components/Dashboard/Nav";
import PageContent from "../components/Dashboard/PageContent";

function DASHBOARD() {
  return (
    <div className="antialiased bg-gray-100">
      <div className="flex relative" x-data="{navOpen: false}">
        <Nav />
        <PageContent />
      </div>
    </div>
  );
}

export default DASHBOARD;
