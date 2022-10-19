import Post from "./Post";
const posts = [
  {
    img: "/images/posts/1.jpg",
    time: "3min ago",
    author: "@guillermosg",
    count_like: 31,
    description: "Descripcion del post, aqui va descripción corta, aqui solo texto del post...",
    count_comment: 5,
  },
  {
    img: "/images/posts/2.jpg",
    time: "5min ago",
    author: "@guillermosg",
    count_like: 31,
    description: "Descripcion del post, aqui va descripción corta, aqui solo texto del post...",
    count_comment: 5,
  },
  {
    img: "/images/posts/3.jpg",
    time: "8min ago",
    author: "@guillermosg",
    count_like: 31,
    description: "Descripcion del post, aqui va descripción corta, aqui solo texto del post...",
    count_comment: 5,
  },
];

function PostList() {
  return (
    <div className="posts mt-4 row">
      {posts.map((post, i) => (
        <Post key={i}
        image={post.img}
        time={post.time}
        author={post.author}
        description={post.description}
        count_like={post.count_like}
        count_comment={post.count_comment}
         />
      ))}
    </div>
  );
}
export default PostList;
