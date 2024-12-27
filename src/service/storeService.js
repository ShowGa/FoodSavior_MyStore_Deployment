import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api-mystore/store`;

class StoreService {
  getStoreInfo() {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.get(API_URL + "/get-store-info", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  updateStoreInfo(storeInfo) {
    const token = JSON.parse(localStorage.getItem("auth-mystore-jwt"));

    return axios.post(API_URL + "/update-store-info", storeInfo, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new StoreService();
