import React from "react";

function SearchBar() {
  return (
    <div>
      <div class="border-gray-700 py-5 text-white border-b rounded">
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg
              class="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <form action="" method="GET">
            <input
              type="search"
              class="w-full py-2 rounded pl-10 bg-gray-800 border-none focus:outline-none focus:ring-0"
              placeholder="Search"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
