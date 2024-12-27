import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api-mystore/auth`;

class AuthService {
  firebaseGoogleOAuth(data) {
    return axios.post(API_URL + "/googleoauth-register", data, {
      withCredentials: true,
    });
  }

  firebaseGoogleOAuthLogin(idToken) {
    return axios.get(API_URL + "/googleoauth-login", {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  }
}

export default new AuthService();
