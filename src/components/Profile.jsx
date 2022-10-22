import { useNavigate } from "react-router-dom";

function Profile({avatar, username, bio}) {

  const navigate = useNavigate();
  
  function cerrarSesion() {
    navigate("/login");
        localStorage.clear();
  }

  return (
    <div className="profile text-center mt-4">
      <img className="rounded-circle header-profile-user" src={avatar} alt={username} />
      <h4 className="mt-3">@{username}</h4>
      <p>{bio}</p>
      <button onClick={cerrarSesion} className="btn btn-primary">Cerrar sesión</button>
    </div>
  );
}

export default Profile;
