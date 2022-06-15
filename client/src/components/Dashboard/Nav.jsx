import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DropdownList from "./DropdownList";
import Profile from "./Profile";
import PageContent from "./PageContent";

function Nav() {
  return (
    <>
      <nav class="absolute md:relative w-64 transform -translate-x-full md:translate-x-0 h-screen overflow-y-scroll bg-black transition-all duration-300">
        <div class="flex flex-col justify-between h-full">
          <div class="p-4">
            <Logo />
            <SearchBar />
            <a
              href="#"
              class="block py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded"
            >
              <svg
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
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <span>Dashboard</span>
            </a>
            <DropdownList />
            <Profile />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
