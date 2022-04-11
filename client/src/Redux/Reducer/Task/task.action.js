import axios from "axios";

// Redux Types
import { CREATE_TASK } from "./task.type";

export const getTask = (taskData) => async (dispatch) => {
  try {
    const order = await axios({
      method: "GET",
      url: "http://localhost:4000/todolist",
      data: { taskData },
    });

    return dispatch({ type: CREATE_TASK, payload: Task.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

// export const orderPlaced =
//   (cartData, razorpay_payment_id) => async (dispatch) => {
//     try {
//       const placeOrder = cartData.map((foodItem) => {
//         const orderDetails = {
//           food: foodItem._id,
//           quantity: foodItem.quantity,
//           paymode: "ONLINE",
//           paymentDetails: {
//             itemTotal: foodItem.totalPrice,
//             promo: 0,
//             tax: 0,
//             razorpay_payment_id,
//           },
//         };
//         axios({
//           method: "POST",
//           url: `http://localhost:4000/order/new`,
//           data: { orderDetails },
//         });
//       });

//       await Promise.all(placeOrder);

//       return dispatch({ type: ORDER_PLACED, payload: {} });
//     } catch (error) {
//       return dispatch({ type: "ERROR", payload: error });
//     }
//   };