import emailjs from "@emailjs/browser";

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
    .send("service_1ptx9u5", "template_aeabztb", data, "vtLrOwezZGAltiC33")
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
};
