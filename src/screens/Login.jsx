import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/login";

function Login({ onLoginComplete }) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    login(form.username.value, form.password.value)
      .then((data) => {
        localStorage.setItem("token", data.token);
        onLoginComplete(data.token);
        navigate("/");
      })
      .catch(() => {
        setError(true);
      });
  }

  return (
    <div className="row justify-content-md-center mt-5">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            {error && <div className="alert alert-danger">Invalid username or password</div>}
            <form onSubmit={handleSubmit}>
              <h4 className="text-center">Login</h4>
              <div className="form-group">
                <label>Username</label>
                <input name="username" type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" required />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
