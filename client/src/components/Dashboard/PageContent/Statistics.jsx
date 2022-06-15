import React from "react";

function Statistics() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
      <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
        <div class="space-y-2">
          <p class="text-xs text-gray-400 uppercase">Value</p>
          <div class="flex items-center space-x-2">
            <h1 class="text-xl font-semibold">$13,500</h1>
            <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p>
          </div>
        </div>
        <svg
          class="w-12 h-12 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>

      <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
        <div class="space-y-2">
          <p class="text-xs text-gray-400 uppercase">Users</p>
          <div class="flex items-center space-x-2">
            <h1 class="text-xl font-semibold">819</h1>
            <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p>
          </div>
        </div>
        <svg
          class="w-12 h-12 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </div>

      <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
        <div class="space-y-2">
          <p class="text-xs text-gray-400 uppercase">Orders</p>
          <div class="flex items-center space-x-2">
            <h1 class="text-xl font-semibold">121</h1>
            <p class="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p>
          </div>
        </div>
        <svg
          class="w-12 h-12 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
      </div>

      <div class="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
        <div class="space-y-2">
          <p class="text-xs text-gray-400 uppercase">Tickets</p>
          <div class="flex items-center space-x-2">
            <h1 class="text-xl font-semibold">243</h1>
            <p class="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p>
          </div>
        </div>
        <svg
          class="w-12 h-12 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Statistics;
