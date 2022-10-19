import axios from "axios";

export function getPosts() {
  return axios
    .get("https://three-points.herokuapp.com/api/posts", {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((response) => response.data);
}