import axios from "axios";

// Redux Types
import { SENDEMAIL, VERIFYEMAIL } from "./email.type";

export const sendEmail = () => async (dispatch) => {
  try {
    var userdata = {
      service_id: "service_1ptx9u5",
      template_id: "template_aeabztb",
      user_id: "vtLrOwezZGAltiC33",
      template_params: {
        subject: "Hello",
        user_email: "swarajdhore2001@gmail.com",
        user_name: "Swaraj",
      },
    };
    console.log("1");
    const Email = await axios({
      method: "POST",
      url: `https://api.emailjs.com/api/v1.0/email/send`,

      data: JSON.stringify(userdata),
    });
    //   console.log(User);
    //   window.location.href = `http://localhost:3000/todolist/`;
    //   localStorage.setItem("todoAppUser", JSON.stringify(User.data.token));
    //   localStorage.setItem("todoAppUserID", JSON.stringify(User.data.id));

    //   const saved = localStorage.getItem("todoAppUserID");
    //   const initialValue = JSON.stringify(saved);
    //   console.log(initialValue);

    return dispatch({ type: SENDEMAIL, payload: Email.data });
  } catch (error) {
    dispatch({ type: "ERROR", payload: error });
  }
};

export const verifyEmail = () => async (dispatch) => {
  try {
    const id_value = localStorage.getItem("todoAppUserID");
    const id = JSON.parse(id_value);
    const token_value = localStorage.getItem("todoAppUser");
    const token = JSON.parse(token_value);

    const verify = await axios({
      method: "GET",
      url: `http://localhost:4000/verify/${id}/${token}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (verify) localStorage.setItem("verified", true);
    console.log(verify);
    return dispatch({ type: VERIFYEMAIL, payload: verify.data });
  } catch (err) {
    dispatch({ type: "ERROR", payload: err });
  }
};
