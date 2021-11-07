import React from "react";
import styles from './Spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles.container}>


      <div className={styles.head}>
        <div className={styles.ears}></div>
        <div className={styles.eyes}>
          <div className={styles.innerEyes}></div>
        </div>
        <div className={styles.eyes}>
          <div className={styles.innerEyes}></div>
        </div>
        <div className={styles.mouth}> </div>
      </div>



      <div className={styles.body}></div>
    </div>
  )
}

export default Spinner;