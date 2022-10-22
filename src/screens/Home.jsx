import { useState } from "react";
import PostList from "../components/PostList";
import SearchBar from "../components/SearchBar";
function Home() {

  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <SearchBar search={search} onSearch={handleSearch} /> <PostList search={search} />
    </>
  );
}

export default Home;
