import {  Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Background_Image from "../components/Background_Image/Background_Image";
import { signUp } from "../Redux/Reducer/Auth/auth.action";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
  })

  const handleChange = (e) =>{
    setUserData ((prev) => ({...prev,[e.target.id]: e.target.value}));
  }


  const submit = (e) => {
    console.log("Hello World")
    setUserData({
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
    });
    dispatch(signUp({
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
      phoneNumber: userData.phoneNumber,
    }));
  };


  return (
    <>
    
    <div className="h-screen flex bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-full max-w-md m-auto shadow-default py-10 px-16">
        <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register Form
        </h2>
        <form>
          <div>
            <label htmlFor="fullName" className="font-semibold">Name</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="fullName"
              type="text"
              placeholder="Name"
              value={userData.fullName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="font-semibold">E-Mail</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="email"
              type="email"
              placeholder="E-Mail"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="font-semibold">Phone Number</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={userData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          {/* <div onChange={handleChange} >
            <Button onClick={submit} type="submit">Submit</Button>
          </div> */}
          <div className="justify-start">
              <div onClick={submit}
                type="submit"
                className={`rounded-lg text-center bg-green-dark py-2 px-4 text-sm text-black font-bold border border-green focus:outline-none focus:border-green-dark`}
              >
                Register
              </div>
            </div>
        </form>
      </div>
    </div>
    
    </>
  );
}




// import { useState } from "react";
// import Button from "../components/UI/Button";

// function RegisterPage() {
//   const [enteredName, setEnteredName] = useState("");
//   const nameHandler = (event) => {
//     setEnteredName(event.target.value);
//     console.log(event.target.value);
//   };

//   const [enteredEmail, setEnteredEmail] = useState("");
//   const emailHandler = (event) => {
//     setEnteredEmail(event.target.value);
//     console.log(event.target.value);
//   };

//   const [enteredPassword, setEnteredPassword] = useState("");
//   const passwordHandler = (event) => {
//     setEnteredPassword(event.target.value);
//     console.log(event.target.value);
//   };

//   const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
//   const phoneNumberHandler = (event) => {
//     setEnteredPhoneNumber(event.target.value);
//     console.log(event.target.value);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <div className="h-screen flex bg-gray-300">
//       <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
//         <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
//           Register Form
//         </h2>
//         <form onSubmit={submitHandler}>
//           <div>
//             <label className="text-gray-600 font-medium">Name</label>
//             <input
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               type="Name"
//               placeholder="Name"
//               value={enteredName}
//               onChange={nameHandler}
//             />
//           </div>
//           <div>
//             <label className="text-gray-600 font-medium">E-Mail</label>
//             <input
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               type="email"
//               placeholder="E-Mail"
//               value={enteredEmail}
//               onChange={emailHandler}
//             />
//           </div>
//           <div>
//             <label className="text-gray-600 font-medium">Password</label>
//             <input
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               type="password"
//               placeholder="Password"
//               value={enteredPassword}
//               onChange={passwordHandler}
//             />
//           </div>
//           <div>
//             <label className="text-gray-600 font-medium">Phone Number</label>
//             <input
//               className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
//               type="phone-number"
//               placeholder="Phone Number"
//               value={enteredPhoneNumber}
//               onChange={phoneNumberHandler}
//             />
//           </div>
//           <div>
//             <Button type="submit">Submit</Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default RegisterPage;
