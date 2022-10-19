import { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import PostList from "./components/PostList";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [section, setSection] = useState("posts");

  const [search, setSearch] = useState("");

  const [loginOk, setLoginOk] = useState(localStorage.getItem("token"));

  function handleSection(state) {
    setSection(state);
  }

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  function renderSection() {
    if (section === "posts") {
      return (
        <><SearchBar search={search} onSearch={handleSearch} /> <PostList search={search} /></>
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
      <NavBar onSection={handleSection} token={loginOk} />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {loginOk ? (
              <>
                {renderSection()}
              </>
            ) : (
              <Login onLoginComplete={setLoginOk} />
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
