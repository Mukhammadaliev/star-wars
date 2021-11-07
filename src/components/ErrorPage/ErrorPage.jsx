import React from "react";
import img from './not-found.png'
import styles from './ErrorPage.module.css'
import { useLocation } from "react-router";
const ErrorPage = () => {

  let location = useLocation();

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img} alt="Not found" />
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </div>
  )
}

export default ErrorPage;