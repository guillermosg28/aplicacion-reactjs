import Header from "./components/Header";
import Search from "./components/Search";
import PostList from "./components/PostList";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
          <Search />
          <PostList />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
