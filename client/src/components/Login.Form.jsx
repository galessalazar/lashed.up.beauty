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
      <div style={styles.inputGroup}>
        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>
  );
};

const styles = {
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px 16px',
    fontSize: '16px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '8px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  },
  inputFocus: {
    borderColor: '#007BFF',
  },
  errorMessage: {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    padding: '12px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '500',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  bottonHover: {
    backgroundColor: '#0056b3',
  },
};
export default LoginForm;
