import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = savedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!existingUser) {
      alert("Invalid credentials");
      return;
    }

    setUser(existingUser);
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
