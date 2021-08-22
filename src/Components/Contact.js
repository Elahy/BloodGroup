import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <h4>Contact us</h4>
        <p>156 BB Road, Sadar, Narayanganj</p>
        <p>+ (880) 181 852 4562</p>
        <p>bloodgroup@gmail.com</p>
        <p className={styles.email}>
          email us
          <span>
            <img
              src="https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412541/E-commerce%20landing%20page/icons/get_in_touch_1x.png"
              alt="email"
            />
          </span>
        </p>
      </div>
    </div>
  );
}

export default Contact;
