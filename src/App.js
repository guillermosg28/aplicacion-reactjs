import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  const [loginOk, setLoginOk] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if(!loginOk){
      navigate("/login");
    }
  }, [loginOk, navigate]);

  return (
    <div className="App">
      <NavBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <Routes>
              <Route path="/login" element={<Login onLoginComplete={setLoginOk} />}/>
              <Route path="/" element={<Home />}/>
              <Route path="/profile" element={<Profile avatar={'/images/perfil.jpg'} username={'guillermosg'} bio={'Desarrollador FullStack, con más de 4 años de experiencia en desarrollo de aplicaciones web con diferentes tecnologías de mayor demanda en el mercado.'} />}/>
            </Routes>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
