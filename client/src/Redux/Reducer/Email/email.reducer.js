import { SENDEMAIL, VERIFYEMAIL } from "./email.type";

const initialState = {};

const EmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SENDEMAIL:
      return {
        ...state,
      };
    case VERIFYEMAIL:
      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};
export default EmailReducer;
