import { useState , useEffect} from "react";

function LoginPage(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  // send http request to fetch data

  useEffect(() => {
    const fetchData = async ()=> {
      const result = await fetch("http://localhost:4000/user");
      const jsonResult = await result.json;

      setEnteredEmail(jsonResult);
      setEnteredPassword(jsonResult);
    }

    fetchData();
  }, [])

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="h-screen flex bg-gray-300">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16">
        <h2 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
          Login Form
        </h2>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              type="email"
              id="email"
              placeholder="Email"
              value={enteredEmail}
              onChange={emailHandler}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
              id="password"
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordHandler}
            />
          </div>
          <div className="flex items-center mt-6">
            <div className="justify-start">
              <button
                type="submit"
                className={`justify-start bg-green-DEFAULT py-2 px-4 text-sm text-black font-bold rounded border border-green focus:outline-none focus:border-green-dark`}
              >
                Login
              </button>
            </div>
            <div className="justify-end ">
              <button
                type="submit"
                className={`justify-end bg-red-500 py-2 px-4 text-sm text-black font-bold rounded border border-red focus:outline-none focus:border-red-default`}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
