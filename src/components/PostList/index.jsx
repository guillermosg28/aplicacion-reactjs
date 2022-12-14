import Post from "./Post";
import { useState, useEffect } from "react";
import { getPosts } from "../../services/posts";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const initialPosts = [];

function PostList({ search}) {

  const navigate = useNavigate();

  const [posts, setPosts] = useState(initialPosts);

  const [searchLocal, setSearchLocal] = useState("");

  const [postsFilter, setPostsFilter] = useState(initialPosts);

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setPostsFilter(posts);
    })
    .catch( (error) => {
      if (error.response.status === 401) {
        navigate("/login");
        localStorage.clear();
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function handleSearch() {
    const results = posts.filter((post) => {
      return post.text.toLowerCase().includes(search);
    });
    setPostsFilter(results);
  }

  if (searchLocal !== search) {
    setSearchLocal(search);
    handleSearch();
  }

  return postsFilter === initialPosts ? (
    <Loading />
  ) : (
    <>
      <div className="posts mt-4 row">
        {postsFilter.map((post, i) => (
          <Post
            key={i}
            image={post.image}
            createdAt={post.createdAt}
            autor={post.author.username}
            text={post.text}
            count_like={post.likes}
            comments={post.comments.length}
          />
        ))}
      </div>
    </>
  );
}
export default PostList;
