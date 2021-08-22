import React from "react";
import { Link } from "react-router-dom";
import styles from "./DonorDetails.module.css";

function DonorDetails() {
  return (
    <div className="root">
      <div className={styles.main}></div>
      <h1 className={styles.header}>
        Please Login First to view donor Details!
      </h1>
      <Link to="/login" className={styles.loginbtn}>
        Login
      </Link>
    </div>
  );
}

export default DonorDetails;
