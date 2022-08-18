import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Background_Image from "../components/Background_Image/Background_Image";
import { signUp } from "../Redux/Reducer/Auth/auth.action";
import { FcGoogle } from "react-icons/fc";
import { Notify2 } from "../components/Toast/Toast";
import { Notify3, Notify5 } from "../components/Toast/Toast";
import { notify } from "../Redux/Reducer/Auth/auth.action";

export var notify3 = () => {
  console.log("in notify 3");
  return Notify3();
}
export var notify5 = () => {
  console.log("in notify 5");
  return Notify5();
}
export default function RegisterPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const googleSignUp = () =>
    (window.location.href = "http://localhost:4000/auth/google");

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };



  const submit = () => {
    console.log("Hello World");
    setUserData({
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    dispatch(
      signUp({
        fullName: userData.fullName,
        email: userData.email,
        password: userData.password,
        phoneNumber: userData.phoneNumber,
      })
    );
    notify();
    notify3();
    notify5();
    if (localStorage.getItem("todoAppUserID")) {
      document.getElementById("msg").innerHTML = "Email Sent successfully. Please check for verification."
    }
    // window.location.href("http://localhost:3000/")
  };
  var emailsent = localStorage.getItem("EmailSent");

  return (
    <div>
      {/* {emailsent ?  : ""} */}
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
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
                <div className="md:mb-8 text-center text-2xl">
                  <a
                    href="javascript:void(0)"
                    className="inline-block max-w-[160px] mx-auto"
                  >
                    {/* <img src="https://img1.wsimg.com/isteam/ip/ad9f9611-18da-4adc-8824-90b6c54786d4/492851_admin_256x256.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:365,h:365,cg:true" alt="logo" height="50px" width="50px"/> */}
                    Register
                  </a>
                </div>
                <form>
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      class="
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
                      id="fullName"
                      value={userData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
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
                      required
                    />
                  </div>
                  <div className="mb-6">
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
                      id="password"
                      value={userData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Phone Number"
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
                      id="phoneNumber"
                      value={userData.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-10" onClick={submit}>
                    <input
                      type="submit"
                      value="Register"
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
                    />
                  </div>
                </form>
                <div id="msg"></div>
                <p className="text-base mb-6 text-[#adadad]">Connect With</p>
                <div className="flex justify-between -mx-2 mb-12">
                  <button
                    onClick={googleSignUp}
                    className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100"
                  >
                    Sign up with Google <FcGoogle />
                  </button>
                </div>

                {/* <p className="text-base mb-6 text-[#adadad]">Connect With</p>
               <ul className="flex justify-between -mx-2 mb-12">
                  <li className="px-2 w-full">
                     <a
                        href="javascript:void(0)"
                        className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#4064AC]
                        hover:bg-opacity-90
                        "
                        >
                        <svg
                           width="10"
                           height="20"
                           viewBox="0 0 10 20"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <path
                              d="M9.29878 8H7.74898H7.19548V7.35484V5.35484V4.70968H7.74898H8.91133C9.21575 4.70968 9.46483 4.45161 9.46483 4.06452V0.645161C9.46483 0.290323 9.24343 0 8.91133 0H6.89106C4.70474 0 3.18262 1.80645 3.18262 4.48387V7.29032V7.93548H2.62912H0.747223C0.359774 7.93548 0 8.29032 0 8.80645V11.129C0 11.5806 0.304424 12 0.747223 12H2.57377H3.12727V12.6452V19.129C3.12727 19.5806 3.43169 20 3.87449 20H6.47593C6.64198 20 6.78036 19.9032 6.89106 19.7742C7.00176 19.6452 7.08478 19.4194 7.08478 19.2258V12.6774V12.0323H7.66596H8.91133C9.2711 12.0323 9.54785 11.7742 9.6032 11.3871V11.3548V11.3226L9.99065 9.09677C10.0183 8.87097 9.99065 8.6129 9.8246 8.35484C9.76925 8.19355 9.52018 8.03226 9.29878 8Z"
                              fill="white"
                              />
                        </svg>
                     </a>
                  </li>
                  <li className="px-2 w-full">
                     <a
                        href="javascript:void(0)"
                        className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#1C9CEA]
                        hover:bg-opacity-90
                        "
                        >
                        <svg
                           width="22"
                           height="16"
                           viewBox="0 0 22 16"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <path
                              d="M19.5516 2.75538L20.9 1.25245C21.2903 0.845401 21.3968 0.53229 21.4323 0.375734C20.3677 0.939335 19.3742 1.1272 18.7355 1.1272H18.4871L18.3452 1.00196C17.4935 0.344423 16.429 0 15.2935 0C12.8097 0 10.8581 1.81605 10.8581 3.91389C10.8581 4.03914 10.8581 4.22701 10.8935 4.35225L11 4.97847L10.2548 4.94716C5.7129 4.82192 1.9871 1.37769 1.38387 0.782779C0.390323 2.34834 0.958064 3.85127 1.56129 4.79061L2.76774 6.54403L0.851613 5.6047C0.887097 6.91977 1.45484 7.95303 2.55484 8.7045L3.5129 9.33072L2.55484 9.67515C3.15806 11.272 4.50645 11.9296 5.5 12.18L6.8129 12.4932L5.57097 13.2446C3.58387 14.4971 1.1 14.4031 0 14.3092C2.23548 15.6869 4.89677 16 6.74194 16C8.12581 16 9.15484 15.8748 9.40322 15.7808C19.3387 13.7143 19.8 5.8865 19.8 4.32094V4.10176L20.0129 3.97652C21.2194 2.97456 21.7161 2.44227 22 2.12916C21.8935 2.16047 21.7516 2.22309 21.6097 2.2544L19.5516 2.75538Z"
                              fill="white"
                              />
                        </svg>
                     </a>
                  </li>
                  <li className="px-2 w-full">
                     <a
                        href="javascript:void(0)"
                        className="
                        flex
                        h-11
                        items-center
                        justify-center
                        rounded-md
                        bg-[#D64937]
                        hover:bg-opacity-90
                        "
                        >
                        <svg
                           width="18"
                           height="18"
                           viewBox="0 0 18 18"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                           >
                           <path
                              d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C15.7024 2.47185 13.3783 0.000145544 9.35587 0.000145544C4.05223 -0.0289334 0 4.30383 0 8.98553C0 13.5218 3.81386 18 9.44526 18C14.4212 18 17.9967 14.7141 17.9967 9.79974C18.0264 8.78198 17.8477 8.17132 17.8477 8.17132Z"
                              fill="white"
                              />
                        </svg>
                     </a>
                  </li>
               </ul> */}
                {/* <a
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
               </a> */}
                <p className="text-base text-[#adadad]">
                  Already a Member?
                  <a href="/login" className="text-primary hover:underline">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
