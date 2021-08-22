import React, { useState } from "react";
import styles from "./Login.module.css";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";

function Login() {
  // const history = useHistory();
  const [log, setlog] = useState(false);
  const handleLogin = () => {
    setlog(true);
    // history.push("/donorlist");
  };
  return (
    <div className={styles.login}>
      <h1 className={styles.header}>Sign In here</h1>

      <p className={styles.body}>Enter UserName</p>
      <input type="text" onChange={() => setlog(false)}></input>
      <p className={styles.body}>Enter Password</p>
      <input type="password" onChange={() => setlog(false)}></input>
      <p className={styles.body}>
        New to this Community?{" "}
        <Link to="/register" className={styles.body}>
          Register Now!
        </Link>
      </p>
      <div>
        <button onClick={handleLogin} className={styles.button}>
          Login
        </button>
        {log ? (
          <p className={styles.error}>Invalid Username or Password</p>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
