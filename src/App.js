import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import { getPosts } from "./services/posts";
import Loading from "./components/Loading";

const initialPosts = [];

function App() {
  const [section, setSection] = useState("posts");

  const [posts, setPosts] = useState(initialPosts);

  const [postsFilter, setPostsFilter] = useState(initialPosts);

  const [search, setSearch] = useState("");

  useEffect(() => {
    getPosts().then((posts) => {
      setPosts(posts);
      setPostsFilter(posts);
    });
  }, []);

  function handleSection(state) {
    setSection(state);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
    const results = posts.filter(post => {
      return post.text.toLowerCase().includes(search);
    }
    );
    setPostsFilter(results);
  }

  function renderSection() {
    if (section === "posts") {
      return (
        posts === initialPosts
          ? <Loading />
          : <PostList posts={postsFilter} />

      );
    }
    if (section === "profile") {
      return (
        <Profile avatar={'/images/perfil.jpg'} username={'guillermosg'} bio={'Desarrollador FullStack, con más de 4 años de experiencia en desarrollo de aplicaciones web con diferentes tecnologías de mayor demanda en el mercado.'} />
      );
    }
  }

  return (
    <div className="App">
      <NavBar onSection={handleSection} />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {search}
            <SearchBar search={search} onSearch={handleSearch} />
            {renderSection()}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
