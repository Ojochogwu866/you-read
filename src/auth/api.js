import axios from "axios";

let API_URL = "https://you-read-api.onrender.com/api/v1";
class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
  }
}
class AuthError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
}
class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}
class ServerError extends ApiError {
  constructor(message) {
    super(message, 500);
  }
}
class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      let response = requireAuth
        ? await axios.get(API_URL + url, config)
        : await axios.get(API_URL + url);
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        throw new AuthError("Unauthorized");
      } else if (error.response.status === 404) {
        throw new NotFoundError("Resource not found");
      } else if (error.response.status >= 500) {
        throw new ServerError("Server error");
      } else {
        throw new ApiError("Unknown error");
      }
    }
  }
  static async post(url, payload, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      let response = requireAuth
        ? await axios.post(API_URL + url, payload, config)
        : await axios.post(API_URL + url, payload);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        store.commit("logOut");
        throw new AuthError("Unauthorized");
      } else if (error.response.status === 404) {
        throw new NotFoundError("Resource not found");
      } else if (error.response.status >= 500) {
        throw new ServerError("Server error");
      } else {
        throw new ApiError("Unknown error");
      }
    }
  }
  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      let response = requireAuth
        ? await axios.put(API_URL + url, payload, config)
        : await axios.put(API_URL + url, payload);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        store.commit("logOut");
        throw new AuthError("Unauthorized");
      } else if (error.response.status === 404) {
        throw new NotFoundError("Resource not found");
      } else if (error.response.status >= 500) {
        throw new ServerError("Server error");
      } else {
        throw new ApiError("Unknown error");
      }
    }
  }
  static async delete(url, requireAuth = true) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      let response = requireAuth
        ? await axios.delete(API_URL + url, config)
        : await axios.delete(API_URL + url);
      return response;
    } catch (error) {
      if (error.response.status === 401) {
        store.commit("logOut");
        throw new AuthError("Unauthorized");
      } else if (error.response.status === 404) {
        throw new NotFoundError("Resource not found");
      } else if (error.response.status >= 500) {
        throw new ServerError("Server error");
      } else {
        throw new ApiError("Unknown error");
      }
    }
  }
}
export default Api;
