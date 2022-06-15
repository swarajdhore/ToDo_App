import React from "react";
import Table from "./PageContent/Table";
import Statistics from "./PageContent/Statistics";

function PageContent() {
  return (
    <main class=" flex-1 h-full overflow-y-scroll overflow-x-hidden ">
      <div class="md:hidden justify-between items-center bg-black text-white flex">
        <h1 class="text-2xl font-bold px-4">Tasky</h1>
        {/* @click="navOpen = !navOpen" */}
        <button class="btn p-4 focus:outline-none hover:bg-gray-800">
          <svg
            class="w-6 h-6 fill-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <section class="max-w-8xl w-max my-full absolute py-4 px-7 object-cover">
        <div class="flex justify-between items-center border-b border-gray-300">
          <h1 class="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
        </div>
        <Statistics />
        <Table />
      </section>
    </main>
  );
}

export default PageContent;
