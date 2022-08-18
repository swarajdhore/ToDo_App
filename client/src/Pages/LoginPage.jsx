import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../Redux/Reducer/Auth/auth.action";
import { getTask } from "../Redux/Reducer/Task/task.action";
import Background_Image from "../components/Background_Image/Background_Image";
// import Navbar from "../components/Navbar/Navbar";
import { Notify4 } from "../components/Toast/Toast";
// import {Formik} from "formik";
// import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
// import * as Yup from "yup"; // used d validating with a pre-built solution
import { FcGoogle } from "react-icons/fc";

export var  notify4 = () => {
    console.log("in notify 4");
    return Notify4(); 
  }


export default function LoginPage(props) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [passwordIsValid, setPasswordIsValid] = useState();
  // const [formIsValid, setFormIsValid] = useState(false);
  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     // now we would only do this after 500 milliseconds
  //     setFormIsValid(
  //       (userData.email.includes("@claimgenius.com") ||
  //         userData.email.includes("@gmail.com")) &&
  //         userData.password.trim().length >= 6
  //     );
  //   }, 500);

  //   return () => {
  //     // this function clears the timer set before it was set
  //     clearTimeout(identifier);
  //   };
  // }, [userData.email, userData.password]);

  // const validateEmailHandler = () => {
  //   setEmailIsValid(
  //     userData.email.includes("@claimgenius.com") ||
  //       userData.email.includes("@gmail.com")
  //   );
  // };

  // const validatePasswordHandler = () => {
  //   setPasswordIsValid(userData.password.trim().length >= 6);
  // };

  const handleChange = (event) => {
    setUserData((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  // if(!userData.email.includes("@claimgenius.com")){
  //   document.getElementById("emailerror").innerHTML = "Please enter a valid email";
  // }
  // if(userData.email.includes("@claimgenius.com")){
  //   document.getElementById("emailerror").innerHTML = "";
  // }
  // const y = "Hello"

  const submit = () => {
    setUserData({
      email: "",
      password: "",
    });
    dispatch(signIn(userData));
    props.onLoginPage(userData.email, userData.password);
  };

  const googleSignIn = () =>
    (window.location.href = "http://localhost:4000/auth/google");

  // const emailerrorHandler = () => {
  //   if (userData.email === "") {
  //     return "";
  //   } else {
  //     if (
  //       userData.email.includes("@claimgenius.com") ||
  //       userData.email.includes("@gmail.com")
  //     ) {
  //       return " ";
  //     } else {
  //       return "Please enter a valid email";
  //     }
  //   }
  // };

  // const passworderrorHandler = () => {
  //   if (userData.password === "") {
  //     return "";
  //   } else {
  //     if (userData.password.length >= 6) {
  //       return " ";
  //     } else {
  //       return "Length must be greater than or equal to 6";
  //     }
  //   }
  // };
  return (
    <div>
      <section className="bg-[#F4F7FF] py-6 md:py-[50px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div
                className="
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-4
               px-10
               sm:px-12
               md:px-[60px]
               "
              >
                <div className=" md:mb-8 text-center text-2xl">
                  <a
                    href="javascript:void(0)"
                    className="inline-block max-w-[160px] mx-auto"
                  >
                    {/* <img src="https://img1.wsimg.com/isteam/ip/ad9f9611-18da-4adc-8824-90b6c54786d4/492851_admin_256x256.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true" alt="logo" height="50px" width="50px"/> */}
                    Login
                  </a>
                </div>
                <form>
                  <div
                    className="mb-6"
                  >
                    <input
                      type="text"
                      placeholder="Email"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      id="email"
                      value={userData.email}
                      onChange={handleChange}
                      // onBlur={validateEmailHandler}
                      required
                    />
                  </div>
                  <div
                    className="mb-6"
                  >
                    <input
                      type="password"
                      placeholder="Password"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                      // className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
                      id="password"
                      value={userData.password}
                      onChange={handleChange}
                      // onBlur={validatePasswordHandler}
                      required
                    />
                  </div>
                  <div className="mb-10" onClick={submit}>
                    <input
                      type="submit"
                      value="Sign In"
                      className="
                        w-full
                        rounded-md
                        border
                        bordder-primary
                        py-3
                        px-5
                        bg-primary
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        transition
                        "
                      onload={getTask()}
                      // disabled={!formIsValid}
                    />
                  </div>
                </form>
                <p className="text-base mb-6 text-[#adadad]">Connect With</p>
                <div className="flex justify-between -mx-2 mb-12">
                  <button
                    onClick={googleSignIn}
                    className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                  >
                    Sign in with Google <FcGoogle />
                  </button>
                </div>
                <a
                  href="javascript:void(0)"
                  className="
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:underline hover:text-primary
                  "
                >
                  Forget Password?
                </a>
                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <a href="/register" className="text-primary hover:underline">
                    Sign Up
                  </a>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
