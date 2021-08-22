import React from "react";
import styles from "./Register.module.css";
import { useHistory } from "react-router";

function Register() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <div className="root">
      <form className={styles.main}>
        <label className={styles.item}>
          First Name :
          <input type="text" name="fname" />
        </label>
        <label className={styles.item}>
          Last Name :
          <input type="text" name="lname" />
        </label>
        <label className={styles.item}>
          Email :
          <input type="email" name="email" />
        </label>
        <label className={styles.item}>
          Blood Group :
          <input type="text" name="bg" />
        </label>
        <label className={styles.item}>
          Address :
          <input type="text" name="Adress" />
        </label>
        <label className={styles.item}>
          Mobile :
          <input type="number" name="mobile" />
        </label>
        <label className={styles.item}>
          Password :
          <input type="password" name="pass" />
        </label>
        <label className={styles.item}>
          Cofirm Password :
          <input type="password" name="confrimpass" />
        </label>
        <input
          onClick={handleSubmit}
          type="submit"
          value="Submit"
          className={styles.button}
        />
      </form>
    </div>
  );
}

export default Register;
