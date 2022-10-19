import data from "../data/posts.json";

export function getPosts() {
  return new Promise((resolve, reject) => {
     window.setTimeout(() => {
       resolve([...data.posts]);
     }, 3000);
  });
}