import axios from "axios";

const backendServerUrl = import.meta.env.VITE_BACKEND_SERVER_URL;
const API_URL = `${backendServerUrl}/api-mystore/upload`;

class UploadImgService {
  uploadImg(file, fileName) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);
    formData.append("public_id", fileName);

    return axios.post(API_URL, formData);
  }
}

export default new UploadImgService();
