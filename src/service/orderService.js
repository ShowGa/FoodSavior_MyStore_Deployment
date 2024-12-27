import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api-mystore/order`;

class OrderService {
  getWaitingOrderList() {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + "/getwaitforconfirmorderlist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  confirmOrder(orderId) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.patch(
      API_URL + `/accepttheorder/${orderId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  getConfirmedOrderList() {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + "/getconfirmedorderlist", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new OrderService();
