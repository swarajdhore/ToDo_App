import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
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
    toast.warn("Email Sent Successfully ", {
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
