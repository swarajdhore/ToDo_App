import {  useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../Redux/Reducer/Auth/auth.action";
import { getTask } from "../Redux/Reducer/Task/task.action";
import Background_Image from "../components/Background_Image/Background_Image";
// import {Formik} from "formik";
// import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
// import * as Yup from "yup"; // used when validating with a pre-built solution

export default function LoginPage(props) {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);                                                        
  useEffect(() => {
    const identifier = setTimeout(() => {
      // now we would only do this after 500 milliseconds
      setFormIsValid(
        (userData.email.includes("@claimgenius.com") || userData.email.includes("@gmail.com")) && userData.password.trim().length >= 6
      );
    }, 500);

    return () => {
      
      // this function clears the timer set before it was set
      clearTimeout(identifier);
    };
  }, [userData.email, userData.password]);
  
  const validateEmailHandler = () => {
    setEmailIsValid(userData.email.includes("@claimgenius.com") || userData.email.includes("@gmail.com"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(userData.password.trim().length >= 6);
  };

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

  const emailerrorHandler = () => {
    if(userData.email === ""){
      return "";
    }
    else{
      if (userData.email.includes("@claimgenius.com") || userData.email.includes("@gmail.com")) {
        return " ";
      }
      else{
        return "Please enter a valid email";
      }
    }
  }

  const passworderrorHandler = () => {
    if(userData.password === ""){
      return "";
    }
    else{
      if (userData.password.length>=6) {
        return " ";
      }
      else{
        return "Length must be greater than or equal to 6";
      }
    }
  }
  
  return (
    <div className="h-screen flex bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="w-full max-w-md m-auto shadow-default py-10 px-16">
        <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login Form
        </h2>
        <form>
          <div className={`${emailIsValid === false ? "border-red-300" : ""}`}>
            <label htmlFor="email">E-Mail</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4 `}
              type="email"
              id="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
              onBlur={validateEmailHandler}
              required
            />
          </div>
          
          <div className={`${passwordIsValid === false ? "border-red-300" : ""}`}>
            <label htmlFor="password">Password</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
              onBlur={validatePasswordHandler}
              required
            />
          </div>
          <div className="flex items-center mt-6">
            <div onClick={submit} className="justify-start">
              <button
                onload={getTask()}
                className={`justify-start bg-green-400 py-2 px-4 text-sm text-black  font-bold rounded border border-green focus:outline-none focus:border-green-dark`}
                disabled={!formIsValid}
              >
                Login
              </button>
            </div>
            <div id="emailerror" className='text-red-600'>
            {emailerrorHandler()}
            {passworderrorHandler()}
            {/* {!userData.email === " " ? "" : "Please enter an email"}
            
          
            {userData.email.includes("@claimgenius.com") ?  "": "Please enter a valid email"} */}
            </div>
            <div className="justify-end ">
              {/* <button
                type="submit"
                className={`justify-end bg-red-500 py-2 px-4 text-sm text-black font-bold rounded border border-red focus:outline-none focus:border-red-default`}
              >
                Cancel
              </button> */}
            </div>
          </div>
        </form>
      </div>
      
    </div>
  );
}


