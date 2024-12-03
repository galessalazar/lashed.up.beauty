// import { useState } from "react";
import RegistrationForm from '../components/RegistrationForm';
import LoginForm from "../components/Login.Form";


const LoginPage = () => {


  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <LoginForm />

        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#888' }}>or</span>
          </div>       
        <h2 style={styles.heading}>Register</h2>
        <RegistrationForm />
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    padding: "20px",
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "30px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#007BFF",
  },
  button: {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default LoginPage;
