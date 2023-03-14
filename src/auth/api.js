import axios from "axios";

let API_URL = "http://localhost:3000/api/v1/";
class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      let response = requireAuth
        ? await axios.get(API_URL + url, config)
        : await axios.get(API_URL + url);
      return response.data;
    } catch (error) {
      let errorData = error.response.data;
      let msg = messageFormater(errorData);
      Vue.$toast.error(msg);
      return error.response;
    }
  }
  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      let response = requireAuth
        ? await axios.post(API_URL + url, payload, config)
        : await axios.post(API_URL + url, payload);

      return response;
    } catch (error) {
      if (error.response.status == 401) {
        store.commit("logOut");
      }
      let errorData = error.response.data;
      let msg = messageFormater(errorData);

      Vue.$toast.error(msg);
      return error.response;
    }
  }
  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      let response = requireAuth
        ? await axios.put(API_URL + url, payload, config)
        : await axios.put(API_URL + url, payload);
      return response;
    } catch (error) {
      if (error.response.status == 401) {
        store.commit("logOut");
      }
      let errorData = error.response.data;
      let msg = messageFormater(errorData);
      Vue.$toast.error(msg);
      return error.response;
    }
  }
  static async delete(url, requireAuth = true) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      };
      let response = requireAuth
        ? await axios.delete(API_URL + url, config)
        : await axios.delete(API_URL + url);
      return response;
    } catch (error) {
      if (error.response.status == 401) {
        store.commit("logOut");
      }
      let errorData = error.response.data;
      let msg = messageFormater(errorData);
      Vue.$toast.error(msg);
      return error.response;
    }
  }
}

export default Api;
