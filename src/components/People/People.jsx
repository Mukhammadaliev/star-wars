import React from "react";
import { Link } from "react-router-dom";
import styles from './People.module.css';

const People = ({img, id, name}) => {
  return (
    <>
    <li className={styles.item} id={id}>
      <Link className={styles.link} to={`/people/${id}`}>
          <img className={styles.img} src={img} alt="Name" />
          <p className={styles.name}>{name}</p>
      </Link>
    </li>
    </>
  )
}

export default People