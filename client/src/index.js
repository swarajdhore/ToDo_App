import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import store from "./Redux/store";
import axios from "axios";
//import { BrowserRouter } from "react-router-dom";

// tar mag axios ka use karat aahe  ??
// import 'bootstrap/dist/css/bootstrap.min.css';

if (localStorage.todoAppUser) {
  const { token } = JSON.parse(localStorage.todoAppUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <App/>
    {/* <Route exact path="/login" Component={<LoginPage />} /> */}
      {/* </App> */}
    </Provider>
    
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
