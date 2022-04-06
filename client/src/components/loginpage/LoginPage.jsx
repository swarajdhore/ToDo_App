import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

function LoginPage(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-form">
      <form onSubmit={submitHandler}>
        <div className="email-field">
          {/* <label htmlFor="email">E-Mail</label> */}
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailHandler}
          />
        </div>
        <div className="password-field">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordHandler}
          />
        </div>
        <div className="button">
          <button type="submit">Login</button>
          <button type="submit">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
