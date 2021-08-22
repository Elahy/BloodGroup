import React from "react";
import styles from "./Guidelines.module.css";

function Guidelines() {
  return (
    <div className={styles.root}>
      <h1 className={styles.head}> Conditions to be a Blood donor</h1>
      <ul className={styles.ulist}>
        <li className={styles.list}>
          Donation frequency should be Every 56 days from Donation.
        </li>
        <li className={styles.list}> You must be in good health condition.</li>
        <li className={styles.list}>
          You must be at least 16 years above to donate
        </li>
        <li className={styles.list}>You must weigh at least 50 KG</li>
      </ul>
    </div>
  );
}

export default Guidelines;
