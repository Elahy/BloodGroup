import React from "react";
import styles from "./Guidelines.module.css";

function Guidelines() {
  return (
    <div className={styles.root}>
      <ul>
        <li>Donation frequency should be Every 56 days from Donation.</li>
        <li>You must be in good health condition.</li>
        <li>You must be at least 16 years above to donate</li>
        <li>You must weigh at least 50 KG</li>
      </ul>
    </div>
  );
}

export default Guidelines;
