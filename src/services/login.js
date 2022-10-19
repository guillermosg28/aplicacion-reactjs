import axios from "axios";

export function login(username, password) {
    return axios
      .post("https://three-points.herokuapp.com/api/login", { username, password })
      .then((response) => response.data);
  }