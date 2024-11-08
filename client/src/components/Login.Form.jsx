import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // save the jwt token in localstorage, i changed the key from 'token' to 'authToken' not sure which one to use
        localStorage.setItem("authToken", data.token);
        // redirect to dashboard
        window.location.href = "/dashboard";
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in", error);
      setError("An error occured while logging in");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
