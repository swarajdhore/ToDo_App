import React from "react";
import MyLogo from "../Logo/MyLogo";

function Logo() {
  return (
    <div className="space-x-4">
      <a class="flex items-center text-white " href="">
        <MyLogo />
        <span class="text-2xl font-bold mr-6">TodoList</span>
      </a>
    </div>
  );
}

export default Logo;
