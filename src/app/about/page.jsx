import React from "react";
import styles from "./page.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <p>This app uses React, Redux, React Router, and many other helpful libraries.</p>
    </div>
  );
}

export default AboutPage;