import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <h1>Sign In here</h1>
      <p>Enter UserName</p>
      <input></input>
      <p>Enter Password</p>
      <input></input>
    </div>
  );
}

export default Login;
