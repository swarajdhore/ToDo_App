import emailjs from "@emailjs/browser";
import { notify5 } from "../../Pages/RegisterPage";
export const Email = () => {
  const lsid = localStorage.getItem("todoAppUserID");
  const lstoken = localStorage.getItem("todoAppUser");
  var data = {
    subject: "Welcome to Tasky",
    user_email: localStorage.getItem("todoAppUserEmail"),
    user_name: localStorage.getItem("todoAppUserName"),
    id: JSON.parse(lsid),
    token: JSON.parse(lstoken),
  };
  emailjs
    .send("default_service", "template_fbygy9h", data, "ZTUWy0qaabImIA6kB")
    .then(
      (result) => {
        console.log(result.text);
        localStorage.setItem("EmailSent", true);

      },
      (error) => {
        console.log(error.text);
        // localStorage.setItem("EmailSent",false);
      }
    );
  notify5();

};
