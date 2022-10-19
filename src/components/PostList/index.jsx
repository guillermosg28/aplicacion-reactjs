import Post from "./Post";

function PostList({posts}) {
  return (
    <div className="posts mt-4 row">
      {posts.map((post, i) => (
        <Post key={i}
        image={post.image}
        createdAt={post.createdAt}
        autor={post.autor}
        text={post.text}
        count_like={post.count_like}
        comments={post.comments}
         />
      ))}
    </div>
  );
}
export default PostList;
