import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // login request using fetch for post method/ dont use the whole http url that bypasses the proxy setup and youll get cors errors
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // sending email/password as json in the request body
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // save the jwt token in localstorage, i changed the key from 'token' to 'token' not sure which one to use
        localStorage.setItem("token", data.token);
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
