import { useState } from "react";
import Table from "./PageContent/Table";
import DropdownList from "./DropdownList";
import Profile from "./Profile";

function PageContent() {

  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
  }


  return (
    <main class=" flex-1 max-w-full">
      <div class="md:hidden justify-between items-center bg-black text-white flex">
        <h1 class="text-2xl font-bold px-4">Tasky</h1>
        {/* @click="navOpen = !navOpen" */}
        <button onClick={handleClick} class=" flex btn p-4 focus:outline-none hover:bg-gray-800">
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
        {/* <Nav /> */}
      </div>
      <span className="md:hidden">
        {hamburger ? <> <DropdownList /> <Profile /></> : ""}
      </span>
      <div className=" scroll-m-8">
        <Table />
      </div>
      {/* <section class="max-w-8xl w-max my-full absolute py-4 px-7 object-cover "> */}
      {/* <div class="flex justify-between items-center border-b border-gray-300">
          <h1 class="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
        </div> */}
      {/* <Statistics /> */}

      {/* </section> */}
    </main>
  );
}

export default PageContent;
