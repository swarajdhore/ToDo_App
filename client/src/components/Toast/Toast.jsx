import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { redux_register_error } from "../../Redux/Reducer/Auth/auth.action";
import { redux_register_success } from "../../Redux/Reducer/Auth/auth.action";
import { redux_login_error } from "../../Redux/Reducer/Auth/auth.action";
toast.configure();

export function Notify() {
  var users = localStorage.getItem("todoAppUserID");

  // Calling toast method by passing string
  // toast.success("Login Successful", {
  //   toastId: "success1",
  // });
  toast.configure();
  if (users) {
    toast.success("Login Successful", {
      toastId: "success1",
      pauseOnHover: false,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      draggable: false,
      closeButton: false,
    });
  } else {
    toast.success("Logged Out Successfully", {
      toastId: "success2",
      pauseOnHover: false,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      draggable: false,
      closeButton: false,
    });
  }

  // toast.clearWaitingQueue();
}

export function Notify2({ emailsent }) {
  var emailsent = localStorage.getItem("EmailSent");
  var email = JSON.parse(emailsent);
  toast.configure();
  if (emailsent) {
    toast.warn("Email Sent Successfully. Please check for verification.", {
      toastId: "success3",
      pauseOnHover: false,
      closeOnClick: false,
      pauseOnFocusLoss: false,
      draggable: false,
      closeButton: false,
    });
  }
  // else if(emailsent == false){
  //   toast.warn("User is Already registered ", {
  //     toastId: "success3",
  //     pauseOnHover: false,
  //     closeOnClick: false,
  //     pauseOnFocusLoss: false,
  //     draggable: false,
  //     closeButton: false,
  //   });
  // }
}

export function Notify3() {

  toast.configure();
  console.log("In NOTIFY 3 in Toast.jsx ");
  console.log(redux_register_error);

  toast.warn(redux_register_error, {
    toastId: "success4",
    pauseOnHover: false,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    draggable: false,
    closeButton: false,
  })
};

export function Notify4() {

  toast.configure();
  console.log("In NOTIFY 4 in Toast.jsx ");
  console.log(redux_login_error);

  toast.warn(redux_login_error, {
    toastId: "success5",
    pauseOnHover: false,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    draggable: false,
    closeButton: false,
  })
};

export function Notify5() {

  toast.configure();
  console.log("In NOTIFY 5 in Toast.jsx ");
  console.log(redux_register_success);

  toast.success("User registered successfully. Please check for your email for verification.", {
    toastId: "success5",
    pauseOnHover: false,
    closeOnClick: false,
    pauseOnFocusLoss: false,
    draggable: false,
    closeButton: false,
  })
};
