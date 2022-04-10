import { useState } from "react";
import Button from "../components/UI/Button";

function RegisterPage() {
  const [enteredName, setEnteredName] = useState("");
  const nameHandler = (event) => {
    setEnteredName(event.target.value);
    console.log(event.target.value);
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  const [enteredPassword, setEnteredPassword] = useState("");
  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
  };

  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const phoneNumberHandler = (event) => {
    setEnteredPhoneNumber(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Register Form
        </h2>
        <form onSubmit={submitHandler}>
          <div>
            <label className="text-gray-600 font-medium">Name</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="Name"
              placeholder="Name"
              value={enteredName}
              onChange={nameHandler}
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium">E-Mail</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="email"
              placeholder="E-Mail"
              value={enteredEmail}
              onChange={emailHandler}
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium">Password</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordHandler}
            />
          </div>
          <div>
            <label className="text-gray-600 font-medium">Phone Number</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="phone-number"
              placeholder="Phone Number"
              value={enteredPhoneNumber}
              onChange={phoneNumberHandler}
            />
          </div>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
