import {  Fragment, useState } from "react";
import Button from "../components/UI/Button";
import { useDispatch } from "react-redux";
import { signIn } from "../Redux/Reducer/Auth/auth.action";
import { getMySelf } from "../Redux/Reducer/User/user.action";


export default function LoginPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

   

  // send http request to fetch data

  // useEffect(() => {
  //   const fetchData = async ()=> {
  //     const result = await fetch("http://localhost:4000/user");
  //     const jsonResult = await result.json;

  //     setEnteredEmail(jsonResult);
  //     setEnteredPassword(jsonResult);
  //   }

  //   fetchData();
  // }, [])

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  // const emailHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  //   console.log(event.target.value);
  // };

  // const passwordHandler = (event) => {
  //   setEnteredPassword(event.target.value);
  //   console.log(event.target.value);
  // };

  const submit = () => {
    setUserData({
      email: "",
      password: "",
    });
    dispatch(signIn(userData));
  };
  
  return (
    <>
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login Form
        </h2>
        <form>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="email"
              id="email"
              placeholder="Email"
              value={userData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center mt-6">
            <div onClick={submit} className="justify-start">
              <div
                
                className={`justify-start bg-green-DEFAULT py-2 px-4 text-sm text-black font-bold rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </div>
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
    </>
  );
}


