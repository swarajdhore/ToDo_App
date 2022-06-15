import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTask } from "../../Redux/Reducer/Task/task.action";
import Logout from "../Logout/Logout";
import MyLogo from "../Logo/MyLogo";
function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  if (localStorage.getItem("todoAppUser")) {
    return (
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="flex-shrink-0 scale-75 ">
              {/* Logo */}
              <Link to="/" className="block" aria-label="Cruip">
                <MyLogo />
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    onClick={getTask()}
                    to="/todolist"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    ToDoList
                  </Link>
                </li>
                <li className="btn-sm text-gray-200 bg-white-900 hover:bg-white-800 ml-3">
                  <Link
                    to="/dashboard"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <Logout />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header
        className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
          !top && "bg-white backdrop-blur-sm shadow-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Site branding */}
            <div className="flex-shrink-0  scale-75">
              {/* Logo */}
              <Link to="/" className="block" aria-label="Cruip">
                <MyLogo />
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    to="/login"
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                  >
                    <span>Register</span>
                    <svg
                      className="w-3 h-3 fill-current text-gray-400 flex-shrink-0 ml-2 -mr-1"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                        fillRule="nonzero"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

// if (localStorage.getItem("todoAppUser")){
//     return (
//       <>

//     <Router>
//       <div className="h-16 sticky top-0  bg-gradient-to-r from-violet-500 to-fuchsia-500 z-60">
//         <div className="absolute left-0">
//           <Logo />
//         </div>
//         <div onload={getTask()} className="md:block  absolute right-0 ">
//           <ul className="flow-root space-x-8 mr-8 mt-6 font-md">
//             {/* <li className="hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/">Home</Link>
//             </li> */}
//             {/* hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium */}
//              <li onClick={getTask()} className="float-left hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/todolist" >ToDoList</Link>
//             </li>
//              <li className="float-right hover:bg-blue-faint rounded-md text-lg px-1 py-1"><Logout /></li>

//             {/* <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/login">Login</Link>
//             </li>
//             <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/Register">Register</Link>
//             </li> */}
//           </ul>
//         </div>
//         <Routes>
//           <Route path="" element={<Home />} />
//           <Route path="/todolist" element={<ToDoList />}></Route>
//           {/* <Route path="/login" element={<LoginPage />}></Route>
//           <Route path="/register" element={<RegisterPage />}></Route> */}
//           <Route path="/addtask" element={<AddTasks />}></Route>
//           {/* <Route path="/google/:token" element={<GoogleAuth/>}></Route> */}
//         </Routes>
//       </div>
//     </Router>
//     </>
//   );
//   }
//   else {return (
// <Router>
//     <div className="h-16 sticky top-0  bg-gradient-to-r from-violet-500 to-fuchsia-500 z-60">
//       <div className=" absolute left-0">
//           <Logo />
//         </div>
//         <div className="md:block  absolute right-0 ">
//           <ul className="flow-root space-x-8 mr-8 mt-6 font-md">
//             {/* <li className="hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/">Home</Link>
//             </li>
//             <li className=" hover:bg-blue-faint text-black px-3 py-2 rounded-md text-xl font-medium">
//               <Link to="/todolist">ToDoList</Link>
//             </li> */}
//             <li className="float-left hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/login">Login</Link>
//             </li>
//             <li className="float-right hover:bg-blue-faint rounded-md text-lg px-1 py-1">
//               <Link to="/Register">Register</Link>
//             </li>
//           </ul>
//         </div>
//     </div>
//         <Routes>
//           <Route path="" element={<Home />} />
//           <Route path="/todolist" element={<ToDoList />}></Route>
//           <Route path="/login" element={<LoginPage />}></Route>
//           <Route path="/register" element={<RegisterPage/>}></Route>
//           <Route path="/addtask" element={<AddTasks />}></Route>
//           <Route path="/google/:token/:id" element={<GoogleAuth/>}></Route>
//         </Routes>
// </Router>
// );}
