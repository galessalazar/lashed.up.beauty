import LoginForm from "../components/Login.Form";

const LoginPage = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <h2>Login</h2>
        <LoginForm />
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
  },
  formContainer: {
    width: "100%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
};

export default LoginPage;
